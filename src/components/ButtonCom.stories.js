import ButtonCom from './ButtonCom.vue';

export default {
  component: ButtonCom, 
  
}

export const Primary = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
};
export const Secondary = {
  args: {
    variant: 'secondary',
    label: 'Button',
  },
};
export const Ghost = {
  args: {
    variant: 'ghost',
    label: 'Button',
  },
};