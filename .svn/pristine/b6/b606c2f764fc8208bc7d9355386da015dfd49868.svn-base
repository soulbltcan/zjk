<template>
    <div id="editCustomer" class="container">
        <h1 class="page-header">修改用户信息</h1>
        <alert v-bind:msg="alert"></alert>
        <form v-on:submit="updateCustomer">
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
        name: "EditCustomer",
        data(){
            return {
                customer: {},
                alert: ""
            }
        },
        methods: {
            fetchCustomers(id){
                this.$axios.get("/back_user/user/" + id).then((response) =>{
                    if(response.data.code === '0'){
                        this.customer = response.data.data;
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
            },
            updateCustomer(e){
                // 取消自带的动作
                e.preventDefault();

                if(!this.customer.userName || !this.customer.userPhone || !this.customer.userEmail){
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                    this.alert = "请补充完整在提交";
                    return false;
                } else {
                    let updateCustomer = {
                        userId: this.customer.userId,
                        userName: this.customer.userName,
                        userPhone: this.customer.userPhone,
                        userAge: this.customer.userAge,
                        userEmail: this.customer.userEmail,
                        userEducation: this.customer.userEducation,
                        userGraduationSchool: this.customer.userGraduationSchool,
                        userProfession: this.customer.userProfession,
                        userProfile: this.customer.userProfile
                    };
                    this.$axios.put("/back_user/user",
                        updateCustomer
                    ).then((response) =>{
                        console.log(response);
                        if(response.data.code === '0' && response.data.data === 1){
                            this.$router.push({path: "/", query: {alert: "用户信息修改成功!!!"}});
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
        created(){
            this.fetchCustomers(this.$route.params.id);
        },
        components: {
            "alert": Alert
        }

    }
</script>

<style scoped>

</style>
