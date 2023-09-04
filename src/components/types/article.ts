/*
 * @Author: xingjin
 * @Date: 2023-07-27 14:13:52
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-09-04 10:43:53
 * @Description: 请填写简介
 */
export interface IArticle {
	id: string;
	category?: string;
	content: string;
	text: string;
	title: string;
	subTitle: string;
	nickname: string;
	likeCount: number;
	scanCount: number;
	tags?: string[];
	createdAt: string;
	[key: string]: any;
}
