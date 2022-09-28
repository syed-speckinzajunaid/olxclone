import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  
	  return (
    <>
	<MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
  <img src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp"
   classNameName="card-img-top" alt="..."/>
          <h2><span > TRY THE OLX APP
</span ></h2>
<p>
               
			   Buy, sell and find just about anything using the app on your mobile.
							 </p>
		         </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h3 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                TRY THE OLX APP

              </h3>
              <p>
               
Buy, sell and find just about anything using the app on your mobile.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Popular Categories</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Cars
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Flats for Rents
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  mobilePhones
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  jobs
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Trading searches</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Bicks
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  watches
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Books
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Dogs
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>About us</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                AboutEMPGs
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Contact Us
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> Olx for business
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> Olx site map
              </p>
			  <p>
                <MDBIcon icon="print" className="me-3" /> Trems of use
              </p>
			  <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
	
	</>
  )
}

export default Footer