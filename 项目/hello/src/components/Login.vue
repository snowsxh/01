<template>
    <div class="login-zujian">
        <el-form label-width="100px" class="login-box">
			<el-form-item label="用户名" prop="username" class="username-from">
				<el-input placeholder="请输入用户名" ></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input type="password" placeholder="请输入密码" ></el-input>
            <!-- 按钮 -->
			</el-form-item>
            <el-from-item class="btns">
                <el-button block type="success">登录</el-button>
                <el-button block type="success">重置</el-button>
            </el-from-item>
		</el-form>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.login-zujian{
    background: slategrey;
    height: 100%;
    .login-box {
        position: absolute;
        width: 450px;
        height: 300px;
        background-color: snow;
        border-radius: 3px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .btns{
        display: flex;
        // justify-self: start;
        justify-content: flex-end;
    }
    .username-from{

    }
}
</style>