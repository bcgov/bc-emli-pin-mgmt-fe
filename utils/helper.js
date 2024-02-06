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

const getRoleValue = (labelText) => {
  const statusList = content.portalUserRole
  for ( const key in statusList) {
    if(labelText === statusList[key]) {
      return key
    }
  }
  return ''
}

const getUserName = (userInfo) => {
  const identity = userInfo?.identity_provider === 'idir'
    ? content.identity.idir
    : content.identity.bceid
  return `${userInfo?.given_name} ${userInfo?.family_name}@${identity}`
}

const getLocalTime = (dateString) => {
  const dateArray = new Date(dateString).toString().split(' ')
  const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const formattedDate = 
    dateArray[3] + '-' + String(monthArray.indexOf(dateArray[1]) + 1).padStart(2, '0') + '-' + dateArray[2] + ' ' + dateArray[4].split(':')[0] + ':' + dateArray[4].split(':')[1]
  return formattedDate
}

export {
  getAccessStatusLabel,
  getRoleLabel,
  getRoleValue,
  getUserName,
  getLocalTime,
}