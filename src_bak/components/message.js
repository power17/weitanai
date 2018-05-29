
import message from './message.vue'
var plugin = {}
plugin.install = function (Vue, options = {}) {
  const Msg = Vue.extend(message)
  const instance = new Msg()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)

  Vue.prototype.$message = (ops) => {
    instance.msg = ops.msg
    instance.paddingClass = ops.paddingClass || 'line3'
    instance.show = true
  }
}

export default plugin
