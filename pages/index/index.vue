<template>
	<view class="home">
		<swiper :indicator-dots="true"  :circular="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/timg.jpg" mode="widthFix"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/timg.jpg" mode="widthFix"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/timg.jpg" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
		
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="item in navlist"  @click="itemClick(item.url,item.title)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		
		<!-- 推荐书籍区域 -->
		<view class="hot_books">
				<view class="title">
					{{currentTitle}}
				</view>
				<booksList :booklist="booklist"></booksList>
		</view>
		
	</view>
</template>

<script>
	import booksList from '../../components/books-list/books-list.vue'
	export default {
		data() {
			return {
				userlist:[],
				booklist:[],
				currentTitle:'新书速递',
				navlist:[
					{icon:'iconfont icon-new',title:'新书速递',path:'pages/message/message',url:'/getNew'},
					{icon:'iconfont icon-remen',title:'人气榜单',path:'pages/message/message',url:'/getPopular'},
					{icon:'iconfont icon-paihangbang',title:'高分图书',path:'pages/message/message',url:'/getScore'},
					{icon:'iconfont icon-cainixihuanfuben',title:'猜你喜欢',path:'pages/message/message',url:'/getNew'},
					]
			}
		},
		components:{
			"booksList":booksList
		},
		onLoad() {
			this.send()
		},
		// 监听触底事件
		onReachBottom() {
			console.log('触底事件触发。。')
		},
		methods: {
			async send() {
				// 这里面的res就相当于success中的resolve传递过来的res
				const res = await this.$myRequest({
					url:'/getNew',
				})
				var data=res.data
				this.booklist = data.slice(0,24)
			},
			async itemClick (url,title) {
				this.currentTitle=title
				// 这里面的res就相当于success中的resolve传递过来的res
				const res = await this.$myRequest({
					url:url,
				})
				var data=res.data
				this.booklist = data.slice(0,24)
			},
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				width: 100%;
				height: 100%;
			}			
		}
	},
	.nav{
		display: flex;
		justify-content: space-between;
		align-items: center;

		text{
			font-size: 30rpx;
		}
		.nav_item{
			width: 25%;
			text-align: center;
			view{
				width: 120rpx;
				height: 120rpx;
				color: white;
				background: #4682B4;
				border-radius: 50%;
				font-size: 70rpx;
				//图标居中
				margin: 10px auto;
				line-height: 120rpx;
			}
		}
	}
	,
	.hot_books{
		background: #eee;
		overflow: hidden;
		margin-top: 10px;
		.title{
			height: 50px;
			line-height: 50px;
			text-align: center;
			color: #4682B4;
			// 文字间距
			letter-spacing: 40rpx;
			background: #FFF;
			margin: 7rpx 0px;
		}
	},
	.books_list{
		padding: 0px  10rpx;
		display: flex;
		// 弹性盒子换行属性
		flex-wrap:wrap;
		justify-content: space-between;
	}
	.books_item{
		background: #fff;
		width:355rpx;
		margin: 10rpx 0;
		font-size:30rpx;
		image{
			width: 100%;
			height: 150px;	
		}
}
</style>
