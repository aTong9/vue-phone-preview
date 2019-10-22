import VuePhonePreview from './main.vue'

(VuePhonePreview as any).install = (Vue: any) => {
  Vue.component(VuePhonePreview.name, VuePhonePreview)
}

export default VuePhonePreview
