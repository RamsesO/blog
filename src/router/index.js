import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/main/home'
import About from '@/components/main/about'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: About
	}
	]
})
