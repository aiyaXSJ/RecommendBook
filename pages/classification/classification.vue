<template>
	<view class="contant">
		<view class="left">
			<view :class="active === index ? 'active':' '" v-for="(item,index) in cates" @click="itemClick(item.path,index)" :key="item.id">{{item.title}}</view>
		</view>
		<scroll-view scroll-y class="right" @scrolltolower="refresh()">
			<catesList :booklist="booklist"></catesList>
		</scroll-view>
	</view>
</template>

<script>
	import catesList from '../../components/cates-list/cates-list.vue'
	import booksList from '../../components/books-list/books-list.vue'
	export default{
		data(){
			return{
				booklist:[],
				active:0,
				url:'/getSocial',
				pagenum:1,
				pagesize:24,
				cates:[
					{title:"人文社科",id:"1",path:"/getSocialByC"},
					{title:"历史传记",id:"2",path:"/getHistoryByC"},
					{title:"小说文学",id:"3",path:"/getNovelByC"},
					{title:"学习教育",id:"4",path:"/getStudyByC"},
					{title:"经济管理",id:"5",path:"/getEconomicByC"},
					{title:"生活时尚",id:"6",path:"/getLifeByC"},
					{title:"励志成功",id:"7",path:"/getSuccessByC"},
					{title:"英文原版",id:"8",path:"/getOriginalByC"}
				]
			} 
		},
		methods:{
			async getCate(){
				const res = await this.$myRequest({
					url:'/getSocial',
				})
				var data=res.data
				this.booklist = data.slice(0,24)
				// console.log(this.booklist)
			},
			async itemClick(path,index){
				this.active=index
				this.url=path
				this.pagenum=1
				const res = await this.$myRequest({
					url:this.url,
					data:{
						pagenum:this.pagenum,
						pagesize:this.pagesize
					}
				})
					var data=res.data
					this.booklist =data
			},
			async refresh(){
				console.log('触底事件触发')
				this.pagenum=this.pagenum+1
				const res = await this.$myRequest({
					url:this.url,
					data:{
						pagenum:this.pagenum,
						pagesize:this.pagesize
					}
				})
					var data=res.data
					this.booklist =data
			},
		},
		onLoad() {
			this.getCate()
		},
		components:{
			"booksList":booksList,
			"catesList":catesList
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.contant{
		height: 100%;
		display:flex;
		justify-content: space-between;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			view{
				height: 60px;
				line-height: 60px;
				color:#333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			.active{
				background: #4682B4;
				color:#fff;
			}
		}
		.right{
			flex: 1;
		}
	}
</style>
