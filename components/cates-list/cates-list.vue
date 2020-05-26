<template>
	<view class="books_list" >
		<view class="books_item" v-for="item in booklist" :key="item.id">
			<image :src="item.bookimg" mode=""></image>
			<view class="item_title">{{item.bookname}}</view>
			<view class="item_author">作者：{{item.author}}</view>
			<view class="item_tag">标签：{{item.tag}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['booklist']
	}
</script>

<style lang="scss">
	.books_list{
		padding: 0px  10rpx;
		display: flex;
		// 弹性盒子换行属性
		flex-wrap:wrap;
		justify-content: space-between;
	}
	.books_item{
		background: #fff;
		width:250rpx;
		margin: 10rpx 0;
		font-size:20rpx;
		image{
			width: 100%;
			height: 200px;	
	}
}
</style>
