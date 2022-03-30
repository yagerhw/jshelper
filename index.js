'use strict';

export class Returnhw {

	constructor(code, message = '', data = null) {
		this.code = code;
		this.message = message;
		this.data = data;
	}

}

export class Arrayhw {

	/**
	 * 对象数组中是否存在指定的 kv
	 * @param {[]} array_
	 * @param {string} key
	 * @param value
	 * @return {boolean}
	 */
	static existObject(array_, key, value) {
		if (!Array.isArray(array_)) {
			return false;
		}

		if (array_.length === 0) {
			return false;
		}

		for (let i = 0; i < array_.length; i++) {
			if (array_[i].hasOwnProperty(key) && array_[i][key] === value) {
				return true;
			}
		}

		return false;
	}

}