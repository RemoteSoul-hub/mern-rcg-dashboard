import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { Link } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Register = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    phone: '',
    password: '',
    password2: '',
  })

  const { prenom, nom, email, phone, password, password2 } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={onSubmit}>
                  <h1 className="text-center">Inscription</h1>
                  {/* <p className="text-medium-emphasis">Create your account</p> */}
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="prénom"
                      autoComplete="prénom"
                      id="prenom"
                      value={prenom}
                      onChange={onChange}
                    />
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="nom"
                      autoComplete="nom"
                      id="nom"
                      value={nom}
                      onChange={onChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="adresse mail"
                      autoComplete="email"
                      id="email"
                      value={email}
                      onChange={onChange}
                    />
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput
                      placeholder="téléphone"
                      autoComplete="téléphone"
                      id="phone"
                      value={phone}
                      onChange={onChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="mot de passe"
                      autoComplete="mot de passe"
                      id="password"
                      value={password}
                      onChange={onChange}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="confirmer le mot de passe"
                      autoComplete="mot de passe"
                      id="password2"
                      value={password2}
                      onChange={onChange}
                    />
                  </CInputGroup>
                  <p className="text-center">
                    Déjà inscrit?
                    <Link to="/login">Me connecter</Link>
                  </p>
                  <div className="d-grid">
                    <button className="button" type="submit">
                      M&apos;inscrire
                    </button>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
