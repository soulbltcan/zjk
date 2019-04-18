<template>
    <div id="addUser" class="container">
        <h1 class="page-header">添加用户</h1>
        <alert v-if="alert" v-bind:msg="alert"></alert>
        <form v-on:submit="addCustomer">
            <div class="well">
                <div class="form-group">
                    <label>姓名</label>
                    <input type="text" class="form-control" placeholder="name..."
                           v-model="customer.userName"/>
                </div>
                <div class="form-group">
                    <label>电话</label>
                    <input type="text" class="form-control" placeholder="phone..."
                           v-model="customer.userPhone"/>
                </div>
                <div class="form-group">
                    <label>年龄</label>
                    <input type="text" class="form-control" placeholder="age..." v-model="customer.userAge"/>
                </div>
                <div class="form-group">
                    <label>邮箱</label>
                    <input type="text" class="form-control" placeholder="email..." v-model="customer.userEmail"/>
                </div>
                <div class="form-group">
                    <label>学历</label>
                    <input type="text" class="form-control" placeholder="education..."
                           v-model="customer.userEducation"/>
                </div>
                <div class="form-group">
                    <label>毕业学校</label>
                    <input type="text" class="form-control" placeholder="graduationschool..."
                           v-model="customer.userGraduationSchool"/>
                </div>
                <div class="form-group">
                    <label>职业</label>
                    <input type="text" class="form-control" placeholder="profession..."
                           v-model="customer.userProfession"/>
                </div>
                <div class="form-group">
                    <label>个人简介</label>
                    <textarea class="form-control" placeholder="profile..." v-model="customer.userProfile"
                              rows="7"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-lg btn-block">提交</button>
            </div>
        </form>
    </div>
</template>

<script>

    import Alert from './Alert'

    export default {
        name: "AddUser",
        data(){
            return {
                customer: {},
                alert:""
            }
        },
        methods: {
            addCustomer(e){
                // 取消自带的动作
                e.preventDefault();

                if(!this.customer.userName || !this.customer.userPhone || !this.customer.userEmail){
                    this.alert = "请补充完整在提交";
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                    return false;
                } else {
                    let newCustomer = {
                        userName: this.customer.userName,
                        userPhone: this.customer.userPhone,
                        userAge: this.customer.userAge,
                        userEmail: this.customer.userEmail,
                        userEducation: this.customer.userEducation,
                        userGraduationSchool: this.customer.userGraduationSchool,
                        userProfession: this.customer.userProfession,
                        userProfile: this.customer.userProfile
                    };
                    this.$axios.post("/back_user/user",
                        newCustomer
                    ).then((response) =>{
                        console.log(response);
                        if(response.data.code === '0' && response.data.data === 1){
                            this.$router.push({path: "/", query: {alert: "用户信息添加成功!!!"}});
                        }
                    }).catch((error) =>{
                        if(error.response){
                            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            console.log('Error', error.message);
                        }
                        console.log(error.config);
                    });

                }
            }
        },
        components:{
            "alert":Alert
        }

    }
</script>

<style scoped>

</style>
