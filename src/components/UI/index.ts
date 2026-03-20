import BaseButton from './BaseButton.vue'
import BaseDialog from './BaseDialog.vue'
import BaseInput from './BaseInput.vue'
import BaseSelect from './BaseSelect.vue'

export default { BaseButton, BaseInput, BaseDialog, BaseSelect }

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BaseButton: typeof BaseButton
    BaseDialog: typeof BaseDialog
    BaseInput: typeof BaseInput
    BaseSelect: typeof BaseSelect
  }
}
