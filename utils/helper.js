import content from '../assets/content/content.json'

const getAccessStatusLabel = (keyText) => {
  const status = keyText.toLowerCase()
  const statusList = content.accessStatus
  for ( const key in statusList) {
    if(status === key) {
      return statusList[key]
    }
  }
  return ''
}

const getRoleLabel = (keyText) => {
  const statusList = content.portalUserRole
  for ( const key in statusList) {
    if(keyText === key) {
      return statusList[key]
    }
  }
  return ''
}

export {
  getAccessStatusLabel,
  getRoleLabel
}