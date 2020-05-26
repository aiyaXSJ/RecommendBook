<template>
	<view class="contant"> 
		<image src="../../static/timg.jpg" mode="widthFix" class="img"></image>
		<view class="info">
			<view @click="call()">联系电话:13692763394(点击拨打)</view>
			<view>联系地址：广东省广州市天河区广州图书馆</view>
		</view>
		<!-- latitude经度  longitude纬度-->
		<map class="map" :latitude="latitude"  :scale="scale" :longitude="longitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				latitude:23.116264,
				longitude:113.326042,
				scale:18,
				markers:[{
						latitude:23.116264,
						longitude:113.326042,
						iconPath: '../../static/location.png',
						width:30,
						height:30,
				}, 
				{
						latitude: 39.90,
						longitude: 116.39,
						iconPath: '../../static/location.png'
				}]
			}
		},
		methods:{
			call(){
				console.log('bda')
				uni.makePhoneCall({
					phoneNumber:'13692763394'
				})
			}
		},		
	}
</script>

<style lang="scss">
	.contant{
		.img{
			width: 750rpx;
			height: 320rpx;
		}
	}
	.info{
		padding:10px 20px;
		font-size: 30rpx;
		view{
			line-height: 60rpx;
			border-bottom: 1px solid #eee;
		}
	}
	.map{
		width: 750rpx;
		height: 750rpx;
	}
</style>
