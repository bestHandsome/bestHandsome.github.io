/*
 * @Author: xingjin
 * @Date: 2023-07-24 15:45:17
 * @LastEditors: xingjinjin
 * @LastEditTime: 2023-07-24 16:35:47
 * @Description: 请填写简介
 */
import { mount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';
describe('HelloWorld.vue', () => {
	const msg = 'Something happened, try again';
	test('renders the correct style for error', () => {
		const wrapper = mount(HelloWorld, {
			props: { msg },
		});
		expect(wrapper.classes()).toEqual(expect.arrayContaining(['msg-wrap']));
	});
	test('slides up when message is empty', () => {
		const wrapper = mount(HelloWorld, {
			props: { msg },
		});
		expect(wrapper.classes('notification--slide')).toBe(true);
	});
	test('renders message when message is not empty', () => {
		const wrapper = mount(HelloWorld, {
			props: { msg },
		});
		expect(wrapper.find('p').text()).toBe(msg);
	});
});
