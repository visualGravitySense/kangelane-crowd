import Vue from 'vue'

// UI
import Message from '@/components/UI/Message.vue'
// import Intro from '@/components/UI/Intro.vue'
// import PostsList from '@/components/Blog/PostsList.vue'

// Controls
import AppButton from '@/components/UI/Controls/Button.vue'
import AppInput from '@/components/UI/Controls/Input.vue'
import AppTextArea from '@/components/UI/Controls/TextArea.vue'

// UI
Vue.component('Message', Message)
// Vue.component('Intro', Intro)
// Vue.component('PostsList', PostsList)

// Controls
Vue.component('AppButton', AppButton)
Vue.component('AppInput', AppInput)
Vue.component('AppTextArea', AppTextArea)

