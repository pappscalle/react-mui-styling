import { FormGroup } from '@mui/material'
import { styled } from '@mui/material/styles'

type StyledFormGroupProps = {
  paddingtop?: number
}

const StyledFormGroup = styled(FormGroup, {
  name: 'StyledFormGroup',
  slot: 'wrapper',
  skipSx: true,
})<StyledFormGroupProps>((props) => ({
  padding: props.theme.spacing(2),
  paddingTop: props.paddingtop,
  justifyContent: 'space-between',
}))

export default StyledFormGroup
