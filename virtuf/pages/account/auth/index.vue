<template>
    <section class="contact-area">
        <div class="container">
            <div class="contact-info-light" data-aos="fade-up" data-aos-duration="1000">
                <div class="comment-form" data-aos="fade-up" data-aos-duration="1000">
                    <Message v-if="message" :message="message" />
                    <form @submit.prevent="onSubmit">

                        <div class="comment-form-content">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <AppInput type="email" v-model="user.email" class="form-control"  > Login: </AppInput>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <AppInput type="password" v-model="user.password" class="form-control" > Password: </AppInput>
                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <AppButton @click="onSubmit" type="submit"> Login </AppButton>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Admin Auth",
        layout: 'admin',
        data () {
            return {
                user: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            onSubmit () {
                // Reset
                this.user.email = '',
                this.user.password = ''
            }
        }
    }
</script>

<style scoped>

</style>