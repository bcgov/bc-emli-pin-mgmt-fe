import { useState, useEffect } from 'react'
import styles from './RequestForm.module.css';
import Content from '../../../assets/content/content.json'
import RequestSubmissionMsg from '../RequestSubmissionMsg'
import Textbox from '../../Textbox';
import { Button } from '../../Button';
import TextArea from '../../TextArea';
import RadioButton from '../../RadioButton'
import LoadingScreen from '../../LoadingScreen'
import LoadingIcon from '../../../assets/svgs/LoadingIcon'
import HttpRequest from '../../../apiManager/httpRequestHandler'

const initialFormValue = {
  userGuid: '',
  identityType: '',
  requestedRole: '',
  organization: '',
  email: '',
  userName: '',
  givenName: '',
  lastName: '',
  requestReason: '',
}

const initialValidation = {
  organization: true,
  roleType: true,
  requestReason: true,
}

export default function RequestForm(props) {
  const {
    userInfo
  } = props;
  const [showForm, setShowForm] = useState(true)
  const [formData, setFormData] = useState(initialFormValue)
  const [organization, setOrganization] = useState('')
  const [roleType, setRoleType] = useState('')
  const [requestReason, setRequestReason] = useState('')
  const [errorFlags, setErrorFlags] = useState(initialValidation);
  const [isLoading, setLoading] = useState(false)
  const [requestSuccess, setRequestSuccess] = useState()
  const identityType= userInfo.identity_provider

  useEffect(() => {
    const inputValue = formData;
    inputValue.givenName = userInfo.given_name
    inputValue.lastName = userInfo.family_name
    inputValue.email = userInfo.email;
    inputValue.userName = userInfo.username;
    inputValue.identityType = userInfo.identity_provider
    inputValue.userGuid = userInfo.user_guid
    inputValue.organization = identityType === 'idir' ? '' : userInfo.bceid_business_name
    if (identityType === 'bceidbusiness') {
      setOrganization(userInfo.bceid_business_name);
    }
    setFormData({ ...inputValue });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requestSubmissionMessage = (isRequestSuccess) => (
      <RequestSubmissionMsg
        showSuccess={isRequestSuccess}
        message={isRequestSuccess ?
          Content.requestSubmitMessage.successMessage
          : Content.requestSubmitMessage.failureMessage
        }
        handleBack={() => setShowForm(true)}
      />
  )

  const resetError = (fieldName) => {
    const errorFlagsValues = errorFlags
    if (!errorFlags[fieldName]) {
      errorFlagsValues[fieldName] = true
    }
    setErrorFlags({ ...errorFlagsValues })
  }

  const onOrgInputChange = (value) => {
    setOrganization(value)
    resetError('organization')
  }

  const onRoleInputChange = (value) => {
    setRoleType(value);
    resetError('roleType')
  }

  const onReasonInputChange = (value) => {
    setRequestReason(value)
    resetError('requestReason')
  }

  const organizationInput = () => (
    identityType === 'idir' ?
      <Textbox
        textBoxId='organization'
        textBoxLabel={Content.requestForm.formInputs.organization}
        textBoxAriaLabel={Content.requestForm.formInputs.organization}
        textBoxPlaceholder={Content.requestForm.formInputs.organizationPlaceholder}
        isRequired={true}
        inputType="text"
        hasError={!errorFlags.organization}
        value={organization}
        onHandleChange={onOrgInputChange}
      /> :
      <Textbox
        textBoxId='organization'
        textBoxLabel={Content.requestForm.formInputs.businessName}
        textBoxAriaLabel={Content.requestForm.formInputs.businessName}
        textBoxPlaceholder={`${formData.organization}`}
        inputType="text"
        isDisabled={true}
      />
  )

  const roleTypeInput = () => (
    <div className={`${styles.roleTypeSection}`}>
      <div className={`${styles.roleTypeLabel}`}>
          {Content.requestForm.formInputs.permissionType}
          <span className={`${styles.required}`}>&nbsp;*</span>
      </div>
      <div className={styles.radioBtnSection}>
        <RadioButton
          radioButtonId='permissionType1'
          radioButtonName='permissionType'
          radioButtonLabel={Content.portalUserRole.standard}
          setSelectedValue={onRoleInputChange}
          selectedValue={roleType}
          hasError={!errorFlags.roleType}
          size='large'
        />
        <RadioButton
          radioButtonId='permissionType2'
          radioButtonName='permissionType'
          radioButtonLabel={Content.portalUserRole.admin}
          setSelectedValue={onRoleInputChange}
          hasError={!errorFlags.roleType}
          selectedValue={roleType}
          size='large'
        />
      </div>
    </div>
  )

  const requestReasonInput = () => (
    <div className={styles.reasonSection}>
      <TextArea
        textAreaId='requestReason'
        textAreaName={Content.requestForm.formInputs.reason}
        textAreaPlaceholder={Content.requestForm.formInputs.reasonPlaceHolder}
        isRequired
        isValid={errorFlags.requestReason}
        value={requestReason}
        onChange={onReasonInputChange}
        />
    </div>
  )

  const validateForm = () => {
    const errorFlagsInfo = errorFlags;

    if (organization === '') {
      errorFlagsInfo.organization = false;
    }

    if (roleType === '') {
      errorFlagsInfo.roleType = false;
    }

    if (requestReason === '') {
      errorFlagsInfo.requestReason = false;
    }
    if (Object.values(errorFlagsInfo).indexOf(false) > -1) {
      setErrorFlags({ ...errorFlagsInfo });
      return false;
    }

    return true;
	};

  const handleSubmitForm = () => {
    const isFormValid = validateForm();
    let inputValue = {}
    inputValue.givenName = userInfo.given_name
    inputValue.lastName = userInfo.family_name
    inputValue.email = userInfo.email;
    inputValue.userName = userInfo.username
    inputValue.identityType = userInfo.identity_provider
    inputValue.userGuid = userInfo.user_guid
    inputValue.organization = identityType === 'idir' ? organization : userInfo.bceid_business_name
    inputValue.requestedRole = roleType === 'Administrator' ? 'Admin' : 'Standard'
    inputValue.requestReason = requestReason

    if(isFormValid) {
      setLoading(true)

      HttpRequest.submitUserAccessRequest(inputValue)
      .then((response) => {
        if (response.status === 201) {
          setShowForm(false)
          setRequestSuccess (true)
          setLoading(false)
        }
      })
      .catch((error) => {
          console.error(error)
          setShowForm(false)
          setRequestSuccess (false)
          setLoading(false)
      })

    }
  }

  const formSection = () => (
    <div className={`${styles.formSection}`}>
      <div className={`${styles.formHeader}`}>
        <h2 className={`${styles.headerTxt}`}>
          {Content.requestForm.formHeaderTitle}
        </h2>
        <div className={`${styles.requiredInfo}`}>
          <span className={`${styles.requiredIndicator}`}>*</span>
          <span className={`${styles.requiredText}`}>{`\u00A0${Content.requestForm.formRequiredText}`}</span>
        </div>
      </div>
      <div className={`${styles.formBody}`}>
        <div className={`${styles.formInputSection}`}>
          <div className={`${styles.formInput}`}>
            <Textbox
              textBoxId='name'
              textBoxLabel={Content.requestForm.formInputs.requesterName}
              textBoxAriaLabel={Content.requestForm.formInputs.requesterName}
              textBoxPlaceholder={`${formData.givenName} ${formData.lastName}`}
              inputType="text"
              isDisabled={true}
            />
          </div>
          <div className={`${styles.formInput}`}>
            <Textbox
              textBoxId='identityType'
              textBoxLabel={Content.requestForm.formInputs.identityType}
              textBoxAriaLabel={Content.requestForm.formInputs.identityType}
              textBoxPlaceholder={`${formData.identityType}`}
              inputType="text"
              isDisabled={true}
            />
          </div>
        </div>
        <div className={`${styles.formInputSection}`}>
          <div className={`${styles.formInput}`}>
            <Textbox
              textBoxId='userName'
              textBoxLabel={Content.requestForm.formInputs.userName}
              textBoxAriaLabel={Content.requestForm.formInputs.userName}
              textBoxPlaceholder={`${formData.userName}`}
              inputType="text"
              isDisabled={true}
            />
          </div>
          <div className={`${styles.formInput}`}>
            <Textbox
              textBoxId='email'
              textBoxLabel={Content.requestForm.formInputs.emailAddress}
              textBoxAriaLabel={Content.requestForm.formInputs.emailAddress}
              textBoxPlaceholder={`${formData.email}`}
              inputType="text"
              isDisabled={true}
            />
          </div>
        </div>
        <div className={`${styles.formInputSection}`}>
          <div className={`${styles.formInput}`}>
            {organizationInput()}
          </div>
          <div className={`${styles.formInput}`}>
            {roleTypeInput()}
          </div>
        </div>
        <div className={`${styles.formInputSection}`}>
          <div className={`${styles.formInputTextArea}`}>
            {requestReasonInput()}
          </div>
        </div>
        <div className={`${styles.btnSection}`}>
          <Button
            variant="primary"
            handleOnClick={handleSubmitForm}
            isDarkBackground={true}
          >
              {Content.requestForm.formInputs.submitBtnText}
          </Button>
        </div>
      </div>
    </div>
  )

  const loadingSection = () => (
    <LoadingScreen
        loadingText=""
        loaderIcon={<LoadingIcon />}
    />
  )

  return (
    <div className={`${styles.container}`}>
        {showForm ? formSection() : requestSubmissionMessage(requestSuccess) }
    </div>
  )
}
