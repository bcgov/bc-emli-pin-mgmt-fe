import content from '../../../assets/content/content.json'
import styles from './EditModal.module.css'
import Modal from '../../Modal'
import HttpRequest from '../../../apiManager/httpRequestHandler'
import {UserManagementContext} from '../../../context/userManagementContext/UserManagementState'
import { useContext, useState, useEffect } from 'react'
import Textbox from '../../Textbox';
import RadioButton from '../../RadioButton'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
  userId: '',
  role: '',
  organization: '',
  email: '',
  userName: '',
  givenName: '',
  lastName: '',
}

const initialValidation = {
  role: true,
  organization: true,
  email: true,
  userName: true,
  givenName: true,
  lastName: true,
}

export default function EditModal(props) {
    const {
      isOpen,
      setIsOpen,
      role
    } = props
    const {
      rowSelected,
      setUsersList,
      setOriginalResult,
    } = useContext(UserManagementContext)
    const modalTitle =  content.userEditModal.title
    const modalBtnText =  content.userEditModal.btnText
    const failureMessage = content.userEditModal.failureMessage

    const [formData, setFormData] = useState(initialState)
    const [errorFlags, setErrorFlags] = useState(initialValidation)
    const [hasErrorFlag, setHasErrorFlag] = useState(false);
    const [isOpenConfirmation, setIsOpenConfirmation] = useState(false)
    const isBceid = rowSelected[0]?.identityType !== 'idir'

    useEffect(() => {
      const inputValue = formData;
      inputValue.userId = rowSelected[0]?.userId
      inputValue.givenName = rowSelected[0]?.givenName
      inputValue.lastName = rowSelected[0]?.lastName
      inputValue.email = rowSelected[0]?.email
      inputValue.userName = rowSelected[0]?.userName
      inputValue.role = rowSelected[0]?.role
      inputValue.organization = rowSelected[0]?.organization
      setFormData({ ...inputValue });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const onClose = () => {
      setFormData({...rowSelected[0]})
      setIsOpen(false)
      setIsOpenConfirmation(false)
    }

    const onInputChange = (value, fieldName) => {
      const inputValue = formData;
      const errorFlagsValues = errorFlags;

      inputValue[fieldName] = value;
      if (!errorFlags[fieldName]) {
        errorFlagsValues[fieldName] = true;
      }
      setHasErrorFlag(false);
      setFormData({ ...inputValue });
      setErrorFlags({ ...errorFlagsValues });
    }
    const onFirstNameChange = (value) => {
      onInputChange(value, 'givenName')
    }
    const onLastNameChange = (value) => {
      onInputChange(value, 'lastName')
    }
    const onUserNameChange = (value) => {
      onInputChange(value, 'userName')
    }
    const onEmailChange = (value) => {
      onInputChange(value, 'email')
    }
    const onRoleInputChange = (value) => {
      onInputChange(value, 'role')
    }
    const onOrgInputChange = (value) => {
      onInputChange(value, 'organization')
    }
    const successToast = () => {
      return toast.success(`${rowSelected.length} ${successMessage}`, {
        position: toast.POSITION.TOP_RIGHT,
        className: `${styles.toastMsgSuccess}`,
        toastId: 'edit-user-success'
      })
    }

    const failureToast = () => {
      return toast.error(` ${failureMessage}`, {
        position: toast.POSITION.TOP_RIGHT,
        className: `${styles.toastMsgFailure}`,
        toastId: 'edit-user-failure'
      })
    }

    const onSuccessAction = (result) => {
      setUsersList(result)
      setOriginalResult(result)
      setIsOpen(false)
      setIsOpenConfirmation(false)
    }
    const validateForm = () => {
      const errorFlagsInfo = errorFlags
      if (isBceid) {
        if (formData.role === '') {
          errorFlagsInfo.role = false;
        }
      } else {
        for (const [key, value] of Object.entries(formData)) {
          if(value === ''){
            errorFlagsInfo[key] = false
          }
        }
      }
      if (Object.values(errorFlagsInfo).indexOf(false) > -1) {
        setErrorFlags({ ...errorFlagsInfo });
        setHasErrorFlag(true)
        return false;
      }
      return true;
    }
    // TODO:Move refetch function to context
    function submitRequests() {
      if(rowSelected.length > 0){
        const isFormValid = validateForm();
        delete formData.deactivationReason
        delete formData.identityType
        delete formData.isActive
        delete formData.updatedAt
        delete formData.userGuid
        if(isFormValid) {
          HttpRequest.updateUser(formData)
          .then((response) => {
              let successMessage = content.userEditConfirmationModal.Updated + formatConfirmationMessage(compareObjects())
              toast.success(`${successMessage}`, {
                position: toast.POSITION.TOP_RIGHT,
                className: `${styles.toastMsgSuccess}`,
                toastId: 'edit-user-success'
              })
              HttpRequest.getUserList('true')
              .then((response) => {
                const result = response?.status === 204 ? [] : response?.data
                onSuccessAction(result)
              })
              .catch((error) => {
                console.error(error)
                toast.error(` ${failureMessage}`, {
                  position: toast.POSITION.TOP_RIGHT,
                  className: `${styles.toastMsgFailure}`,
                  toastId: 'edit-user-failure'
                })
                setIsOpen(false)
                setIsOpenConfirmation(false)
              })
          })
          .catch((error) => {
              toast.error(` ${failureMessage}`, {
                position: toast.POSITION.TOP_RIGHT,
                className: `${styles.toastMsgFailure}`,
                toastId: 'edit-user-failure'
              })
              setIsOpen(false)
              setIsOpenConfirmation(false)
          })
        }
      }
    }

    function openConfirmationModal() {
      setIsOpen(false)
      setIsOpenConfirmation(true)
    }

    function compareObjects() {
      let updatedValues = {}
      rowSelected[0].givenName == formData.givenName ? '' : updatedValues[content.userEditForm.formInputs.firstName] = [rowSelected[0].givenName, formData.givenName]
      rowSelected[0].lastName == formData.lastName ? '' : updatedValues[content.userEditForm.formInputs.lastName] = [rowSelected[0].lastName, formData.lastName]
      rowSelected[0].userName == formData.userName ? '' : updatedValues[content.userEditForm.formInputs.userName] = [rowSelected[0].userName, formData.userName]
      rowSelected[0].organization == formData.organization ? '' : updatedValues[content.userEditForm.formInputs.organization] = [rowSelected[0].organization, formData.organization]
      rowSelected[0].email == formData.email ? '' : updatedValues[content.userEditForm.formInputs.emailAddress] = [rowSelected[0].email, formData.email]
      rowSelected[0].role == formData.role ? '' : updatedValues[content.userEditForm.formInputs.role] = [rowSelected[0].role, formData.role]
      if (Object.keys(updatedValues).length === 0) {
        return false
      } else {
        return updatedValues
      }
    }

    function formatConfirmationMessage(updatedValues) {
      let message = ""
      if (Object.keys(updatedValues).length === 1) {
        for (const key in updatedValues) {
          message = `${message} ${key} from "${updatedValues[key][0]}" to "${updatedValues[key][1]}"`
        }
      }
      else if (Object.keys(updatedValues).length > 1) {
        let count = 1
        for (const key in updatedValues) {
          count != 1 ? message = message + ' and ' : ''
          message = `${message} ${key} from "${updatedValues[key][0]}" to "${updatedValues[key][1]}"`
          ++count
        }
      }
      return message
    }

    const roleTypeInput = () => (
      <div className={`${styles.roleTypeSection}`}>
        <div className={`${styles.roleTypeLabel}`}>
            {content.userEditForm.formInputs.permissionType}
            <span className={`${styles.required}`}>&nbsp;*</span>
        </div>
        <div className={styles.radioBtnSection}>
          <RadioButton
            radioButtonId='permissionType1'
            radioButtonName='permissionType'
            radioButtonLabel={content.portalUserRole.Standard}
            value={'Standard'}
            setSelectedValue={onRoleInputChange}
            selectedValue={formData.role}
            hasError={!errorFlags.role}
            size='large'
          />
          <RadioButton
            radioButtonId='permissionType2'
            radioButtonName='permissionType'
            radioButtonLabel={content.portalUserRole.Admin}
            value={'Admin'}
            setSelectedValue={onRoleInputChange}
            hasError={!errorFlags.role}
            selectedValue={formData.role}
            size='large'
          />
          { role === "SuperAdmin" ? 
            <RadioButton
              radioButtonId='permissionType3'
              radioButtonName='permissionType'
              radioButtonLabel={content.portalUserRole.SuperAdmin}
              value={'SuperAdmin'}
              setSelectedValue={onRoleInputChange}
              hasError={!errorFlags.role}
              selectedValue={formData.role}
              size='large'
            />
            : ''
          }
        </div>
      </div>
    )
    const editForm = (
      <div className={`${styles.formBody}`}>
      <div className={`${styles.requiredInfo}`}>
        <span className={`${styles.requiredIndicator}`}>*</span>
        <span className={`${styles.requiredText}`}>{`\u00A0${content.requestForm.formRequiredText}`}</span>
      </div>
      <div className={`${styles.formInputSection}`}>
        <div className={`${styles.formInput}`}>
          <Textbox
            textBoxId='identityType'
            textBoxLabel={content.userEditForm.formInputs.identityType}
            textBoxAriaLabel={content.userEditForm.formInputs.identityType}
            textBoxPlaceholder={rowSelected[0]?.identityType}
            inputType="text"
            isRequired={true}
            isDisabled={true}
          />
        </div>
      </div>
      <div className={`${styles.formInputSection}`}>
        <div className={`${styles.formInput}`}>
          <Textbox
            textBoxId='givenName'
            textBoxLabel={content.userEditForm.formInputs.firstName}
            textBoxAriaLabel={content.userEditForm.formInputs.firstName}
            value={formData.givenName}
            isRequired={true}
            inputType="text"
            isDisabled={isBceid}
            onHandleChange={onFirstNameChange}
            hasError={!errorFlags.givenName}
          />
        </div>
        <div className={`${styles.formInput}`}>
          <Textbox
            textBoxId='lastName'
            textBoxLabel={content.userEditForm.formInputs.lastName}
            textBoxAriaLabel={content.userEditForm.formInputs.lastName}
            value={formData.lastName}
            isRequired={true}
            inputType="text"
            isDisabled={isBceid}
            onHandleChange={onLastNameChange}
            hasError={!errorFlags.lastName}
          />
        </div>
        <div className={`${styles.formInput}`}>
          <Textbox
            textBoxId='userName'
            textBoxLabel={content.userEditForm.formInputs.userName}
            textBoxAriaLabel={content.userEditForm.formInputs.userName}
            value={formData.userName}
            isRequired={true}
            inputType="text"
            isDisabled={isBceid}
            onHandleChange={onUserNameChange}
            hasError={!errorFlags.userName}
          />
        </div>
      </div>
      <div className={`${styles.formInputSection}`}>
        <div className={styles.formInput}>
          <Textbox
            textBoxId='organization'
            textBoxLabel={content.userEditForm.formInputs.organization}
            textBoxAriaLabel={content.userEditForm.formInputs.organization}
            isRequired={true}
            inputType="text"
            hasError={!errorFlags.organization}
            value={formData.organization}
            onHandleChange={onOrgInputChange}
            isDisabled={isBceid}
          />
        </div>
        <div className={`${styles.formInput}`}>
          <Textbox
            textBoxId='email'
            textBoxLabel={content.userEditForm.formInputs.emailAddress}
            textBoxAriaLabel={content.userEditForm.formInputs.emailAddress}
            value={formData.email}
            isRequired={true}
            inputType="text"
            onHandleChange={onEmailChange}
            hasError={!errorFlags.email}
            isDisabled={isBceid}
          />
        </div>
        <div className={`${styles.formInput}`}>
          {roleTypeInput()}
        </div>
      </div>
    </div>
    )

    return (
        <div>
            <Modal
                modalHeader={modalTitle}
                modalId="user-deactivation-modal"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                modalMainBtn={{
                    text: `${modalBtnText}`,
                    size: 'medium',
                    variant: 'primary',
                    disabled: rowSelected.length < 1 || hasErrorFlag,
                    onClickHandler: () => openConfirmationModal(),
                }}
                modalSecondaryBtn={{
                    text: `${content.userDeactivateModal.cancelButton}`,
                    size: 'medium',
                    variant: 'secondary',
                    onClickHandler: () => onClose(),
                }}
            >
                {editForm}
            </Modal>
            <Modal
                modalHeader={content.userEditConfirmationModal.modalTitle}
                modalId="edit-user-confirmation-modal"
                isOpen={isOpenConfirmation}
                setIsOpen={setIsOpenConfirmation}
                modalMainBtn={{
                    text: `Confirm`,
                    size: 'medium',
                    variant: 'primary',
                    disabled: !compareObjects(),
                    onClickHandler: () => submitRequests(),
                }}
                modalSecondaryBtn={{
                    text: `${content.userDeactivateModal.cancelButton}`,
                    size: 'medium',
                    variant: 'secondary',
                    onClickHandler: () => onClose(),
                }}
            >
              <div>
              {
                compareObjects() ? 
                  content.userEditConfirmationModal.oneChangeMessage +
                  formatConfirmationMessage(compareObjects()) + "?"
                : `${content.userEditConfirmationModal.noChangesMessage}`
              }
              </div>
            </Modal>
        </div>
    )
}