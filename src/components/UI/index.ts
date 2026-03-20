import BaseButton from './BaseButton.vue'
import BaseDialog from './BaseDialog.vue'
import BaseInput from './BaseInput.vue'
import BasePagination from './BasePagination.vue'
import BaseSelect from './BaseSelect.vue'

export default { BaseButton, BaseInput, BaseDialog, BaseSelect, BasePagination }

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BaseButton: typeof BaseButton
    BaseDialog: typeof BaseDialog
    BaseInput: typeof BaseInput
    BaseSelect: typeof BaseSelect
    BasePagination: typeof BasePagination
  }
}
