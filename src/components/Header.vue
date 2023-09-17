<template>
    <div class="header" >
        <div class="right">
            <a href="">我的订单</a> 
            <a href="">我的购物车</a>
            <a href="">我的收藏</a>
            <a href="">我的会员</a>
            <a href="">我关注的店铺</a>
            <a href="">商家后台</a>
        
        </div>
        <div class="left">
            <span>tdd欢迎你！</span>
            <p>
                <a id ='signUp' href="">注册</a>
                ｜
                <a id='signIn' href="">登陆</a>
            </p>
            
        </div>
    </div>
</template>

<script>


export default {
    name: 'Header',
    components: {

    }
}
</script>

<style lang='less' scoped>
.header{
    height: 2.5rem;
    background-color:#eaeaea;
    //右边导航
    .right{
        height: 2.5rem;
        float: right;
        display:flex;
        justify-content: center;
        align-items: center;

        a{
        display: block;
        width: 6.5rem;
        height: 1.5rem;

        font-size: 10px;
        color: #000;
        text-align: center;
        line-height: 1.5rem;
        text-decoration: none;
        border-right: 1px solid #000;
        //background-color:cyan;
        }
        
    }
    //左边导航
    .left{
        height: 2.5rem;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;

        span,p{
            margin:0 1rem;
            width: 8rem;
            height: 1.5rem;
            font-size: 10px;
            font-weight: 700;

            text-align: center;
            line-height: 1.5rem;
            
            #signIn,#signUp{
                text-decoration: none;
                color: #000;
            }
        }
        
    }
}

</style>