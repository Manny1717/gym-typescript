import Logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="logo" />
                <p>Magna Lorem cillum exercitation minim consectetur id aute. Adipisicing id aliquip ad et sunt eiusmod nulla id. 
                    Aliquip amet veniam labore dolore ex cupidatat mollit reprehenderit ullamco voluptate est id.
                </p>
                <p>© Evogym All Rights Reserved.</p>
            </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Links</h4>
            <p className='my-5'>Massa orci senectus</p>
            <p className='my-5'>Et gravida id et etiam</p>
            <p>Ullamcorper vivamus</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Contact Us</h4>
            <p className='my-5'>Tempus metus mattis risus volutpat egesstas.</p>
            <p>(333) 425-6825</p>
        </div>
        </div>
    </footer>
   
  )
}

export default Footer 