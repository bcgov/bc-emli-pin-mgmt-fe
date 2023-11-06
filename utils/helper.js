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
  const status = keyText.toLowerCase()
  const statusList = content.portalUserRole
  for ( const key in statusList) {
    if(status === key) {
      return statusList[key]
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
  const formattedDate = new Date(dateString)
  .toISOString()
  .split('T')[0] +
  ' ' +
  new Date(dateString)
      .toISOString()
      .split('T')[1]
      .split(':')[0] +
  ':' +
  new Date(dateString)
      .toISOString()
      .split('T')[1]
      .split(':')[1]

      return formattedDate
}

export {
  getAccessStatusLabel,
  getRoleLabel,
  getUserName,
  getLocalTime,
}