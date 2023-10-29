import content from '../../../assets/content/content.json'
import Modal from '../../Modal'
import HttpRequest from '../../../apiManager/httpRequestHandler'
import {AccessContext} from '../../../context/accessContext/AccessState'
import { useContext } from 'react'

export default function GrantModal(props) {
    const {
      isOpen,
      setIsOpen,
    } = props
    const { rowSelected, setRequestList, setOriginalResult } = useContext(AccessContext)
    const isMultipleSelected = rowSelected.length > 1
    const modalTitle = isMultipleSelected ?
    content.accessGrantModal.titleMultiple
    : content.accessGrantModal.title
    const modalBodyText = rowSelected.length < 1 ?
    content.accessGrantModal.selectErrorMessage
    : (isMultipleSelected ?
      `${content.accessGrantModal.bodyMultipleText} ${rowSelected.length} users?`
      : content.accessGrantModal.bodyText)
    const modalBtnText = isMultipleSelected ?
      content.accessGrantModal.multipleBtnText
      : content.accessGrantModal.btnText

      // TODO:Move refetch function to context
    function submitRequests() {
      if(rowSelected.length > 0){
        const requestIds = rowSelected.map((item) => item.requestId);
        const body = {
          action: 'Granted',
          requestIds
        }
        HttpRequest.updateAccessRequest(body)
          .then((response) => {
              HttpRequest.getRequestList('pending')
              .then((response) => {
                const result = response?.data
                setRequestList(result)
                setOriginalResult(result)
                setIsOpen(false)
              })
              .catch((error) => {
                console.error(error)
                setIsOpen(false)
              })
          })
          .catch((error) => {
              setIsOpen(false)
          })

      }
    }

    return (
        <div>
            <Modal
                modalHeader={modalTitle}
                modalId="access-grant-modal"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                modalMainBtn={{
                    text: `${modalBtnText}`,
                    size: 'medium',
                    variant: 'primary',
                    disabled: rowSelected.length < 1,
                    onClickHandler: () => submitRequests(),
                }}
                modalSecondaryBtn={{
                    text: `${content.accessGrantModal.cancelButton}`,
                    size: 'medium',
                    variant: 'secondary',
                    onClickHandler: () => setIsOpen(false),
                }}
            >
                {modalBodyText}
            </Modal>
        </div>
    )
}