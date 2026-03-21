import type { Directive } from 'vue'

const VFocus: Directive = {
  mounted: (el: HTMLInputElement) => {
    el.focus()
  },
}

export default VFocus
