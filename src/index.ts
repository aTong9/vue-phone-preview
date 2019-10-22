import VuePhonePreview from './component/main.vue'

const components = [
  VuePhonePreview
]

const install = (Vue: any) => {
  if ((install as any).installed) return
  (install as any).installed = true
  components.map((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && (window as any).Vue) {
  // window.Vue.use(install)
  install((window as any).Vue)
}

export default VuePhonePreview
