import {
	AsyncStorage,
	DeviceEventEmitter,
} from 'react-native';
const userToken = "";
AsyncStorage.getItem('userToken').then(res => {
	console.log(6, "res = " + res);
	userToken = res
});
let httpHelper = {};
/*let base_url = "http://192.168.1.112:9003";*/
/*let base_url = "http://120.79.228.106:9003";*/
/*let base_url = "http://192.168.1.112:9003";*/
/*let base_url = "http://523309375.free.ngrok.cc";*/
let base_url = "http://39.108.238.33:9003";
/*let base_url = "http://192.168.1.172:9003";*/
/*let base_url = "http://120.79.228.106:9003";*/
/**
 * 基于 fetch 封装的 GET请求
 * @param url
 * @param params {}
 * @param headers
 * @returns {Promise}
 */
httpHelper.get = function(url, params, headers) {
	if (headers && !userToken) {
		console.log("没登录或者登录失效")
		/*DeviceEventEmitter.emit('login', '需要登录啦');*/
	}
	url = `${base_url}${url}`
	if (params) {
		let paramsArray = [];
		//encodeURIComponent
		Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
		console.log(21, paramsArray)
		if (url.search(/\?/) === -1) {
			url += '?' + paramsArray.join('&')
		} else {
			url += '&' + paramsArray.join('&')
		}
	}
	console.log(29, url)
	return new Promise(function(resolve, reject) {
		fetch(url, {
				method: 'GET',
				headers: headers ? {
					authorization: userToken
				} : {
					"Content-Type": "application/json;charset=UTF-8",
				},
			})
			.then((response) => {
				if (response.ok) {
					let flag = url.indexOf("/auth/receiver/rest/order/pay") > -1 ? true : false;
					console.log(typeof(response));
					if (flag) {
						return response;
					} else {
						return response.json();
					}
				} else {
					console.log(39, response);
					return {
						isSucc: false,
						message: "数据问题"
					}
					reject({
						status: response.status
					})
				}
			})
			.then((response) => {
				resolve(response);
				return {
					isSucc: false,
					message: "数据问题"
				}
			})
			.catch((err) => {
				console.log(67, err)
				reject({
					status: -1
				});
				return {
					isSucc: false,
					message: "数据问题"
				}
			})
	})
}

httpHelper.put = function(url, data, headers) {
	url = `${base_url}${url}`;
	let formData = new FormData();
	if (data) {
		for (let key in data) {
			formData.append(key, data[key]);
		}
	}
	console.log(77, url, formData)
	return new Promise(function(resolve, reject) {
		fetch(url, {
				method: 'PUT',
				body: formData._parts.length > 0 ? formData : null,
				headers: headers ? {
					authorization: userToken
				} : null
			})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					reject({
						status: response.status
					})
				}
			})
			.then((response) => {
				console.log(2, response)
				resolve(response);
				return {
					isSucc: false,
					message: "数据问题"
				}
			})
			.catch((err) => {
				console.log(3, err)
				reject({
					status: -1
				});
				return {
					isSucc: false,
					message: "数据问题"
				}
			})
	})
}
/**
 * 基于 fetch 封装的 POST请求  FormData 表单数据
 * @param url
 * @param formData
 * @param headers
 * @returns {Promise}
 */
httpHelper.post = function(url, data, headers) {
	url = `${base_url}${url}`;
	let formData = new FormData();
	if (data) {
		for (let key in data) {
			formData.append(key, data[key]);
		}
	}
	console.log(111, url, data, formData);
	return new Promise(function(resolve, reject) {
		fetch(url, {
				method: 'POST',
				body: formData._parts.length > 0 ? formData : null,
				headers: headers ? {
					authorization: userToken
				} : null
			})
			.then((response) => {
				console.log(119, response);
				if (response.ok) {
					return response.json();
				} else {
					reject({
						status: response.status
					})
					return {
						isSucc: false,
						message: "数据问题"
					}
				}
			})
			.then((response) => {
				console.log(2, response)
				resolve(response);
				return {
					isSucc: false,
					message: "数据问题"
				}
			})
			.catch((err) => {
				console.log(3, err)
				/*reject({
					status: -1
				});*/
				return {
					isSucc: false,
					message: "数据问题"
				}
			})
	})
}
httpHelper.login = (params, callback) => {
	httpHelper.post("/rest/receiver/login", params).then(res => {
		if (res.isSucc) {
			AsyncStorage.setItem('userToken', res.result.token);
			userToken = res.result.token;
		} else {
			AsyncStorage.setItem('userToken', "");
			userToken = "";
		}
		console.log(202, res);
		callback(res);
	})
}
httpHelper.uploadImage = (params) => {
	url = base_url + "/tool/upload";
	console.log(146, params);
	console.log(184, userToken);
	return new Promise(function(resolve, reject) {
		var ary = params.path.split('/');
		let formData = new FormData();
		let file = {
			uri: params.path,
			type: 'multipart/form-data',
			name: ary[ary.length - 1]
		};
		formData.append("file", file);
		fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				body: formData,
			}).then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					reject({
						status: response.status
					})
				}
			})
			.then((responseData) => {
				console.log('uploadImage', responseData);
				resolve(responseData);
				return {
					isSucc: false,
					message: "数据问题"
				}
			})
			.catch((err) => {
				console.log('err', err);
				reject(err);
				return {
					isSucc: false,
					message: "数据问题"
				}
			});
	});
}

export default httpHelper;