import React, { useState, useRef } from 'react';
import Layout from '../../../components/layout/Layout';
import { FadeIn, ScaleIn } from '../../../components/animations';
import * as FaIcons from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  GeneratorContainer,
  GeneratorForm,
  FormTitle,
  FormLabel,
  FormInput,
  FormTextarea,
  FormRow,
  FormGroup,
  RadioGroup,
  RadioLabel,
  RadioInput,
  GenerateButton,
  PreviewContainer,
  PreviewTitle,
  PreviewActions,
  IconButton,
  CoverLetterPreview,
  LetterHeader,
  LetterDate,
  LetterAddress,
  LetterSubject,
  LetterBody,
  LetterSignature,
  HighlightedText,
  InfoSection,
  StepsList,
  GuideSection,
  GuideTitle,
  GuideSubtitle,
  GuideParagraph,
  BulletList
} from './domainCoverLetter.styles';

const DomainCoverLetterGenerator: React.FC = () => {
  const [applicantType, setApplicantType] = useState('individual');
  const [fullName, setFullName] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [domainName, setDomainName] = useState('');
  const [purpose, setPurpose] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const coverLetterRef = useRef<HTMLDivElement>(null);
  
  const generateCoverLetter = () => {
    if (!validateForm()) return;
    setShowPreview(true);
  };
  
  const validateForm = () => {
    if (applicantType === 'individual' && !fullName) {
      alert('Please enter your full name');
      return false;
    }
    
    if (applicantType === 'organization' && !organizationName) {
      alert('Please enter your organization name');
      return false;
    }
    
    if (!address || !contactNumber || !email || !domainName) {
      alert('Please fill in all required fields');
      return false;
    }
    
    return true;
  };
  
  const copyToClipboard = () => {
    if (!coverLetterRef.current) return;
    
    const content = coverLetterRef.current.innerText;
    navigator.clipboard.writeText(content);
    alert('Cover letter copied to clipboard!');
  };
  
  const downloadAsDocx = () => {
    // This is a simplified approach. In a real application, you might want to use a library
    // like docx.js to create a proper Word document
    const content = coverLetterRef.current?.innerHTML || '';
    const blob = new Blob([`
      <html>
        <head>
          <style>
            body { font-family: 'Times New Roman', Times, serif; line-height: 1.6; }
          </style>
        </head>
        <body>
          ${content}
        </body>
      </html>
    `], { type: 'application/msword' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'domain_cover_letter.doc';
    link.click();
  };
  
  return (
    <Layout
      title="Domain Cover Letter Generator - .com.np Domain Registration"
      description="Generate a professional cover letter for your .com.np domain registration in Nepal. Simplify the domain registration process with our free tool."
      keywords="domain cover letter, .com.np domain, Nepal domain registration, domain application, NP domain"
    >
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <FadeIn direction="down" duration={0.7}>
            <HeroTitle>Domain Cover Letter Generator</HeroTitle>
          </FadeIn>
          <FadeIn direction="up" delay={0.3} duration={0.7}>
            <HeroSubtitle>
              Create a professional cover letter for your .com.np domain registration
            </HeroSubtitle>
          </FadeIn>
        </HeroContent>
      </HeroSection>
      
      {/* Generator Section */}
      <section>
        <GeneratorContainer>
          <FadeIn>
            {!showPreview ? (
              <GeneratorForm>
                <FormTitle>Enter Your Information</FormTitle>
                
                <FormGroup>
                  <FormLabel>Applicant Type</FormLabel>
                  <RadioGroup>
                    <RadioLabel>
                      <RadioInput 
                        type="radio" 
                        name="applicantType" 
                        value="individual" 
                        checked={applicantType === 'individual'}
                        onChange={() => setApplicantType('individual')}
                      />
                      Individual
                    </RadioLabel>
                    <RadioLabel>
                      <RadioInput 
                        type="radio" 
                        name="applicantType" 
                        value="organization" 
                        checked={applicantType === 'organization'}
                        onChange={() => setApplicantType('organization')}
                      />
                      Organization
                    </RadioLabel>
                  </RadioGroup>
                </FormGroup>
                
                {applicantType === 'individual' ? (
                  <FormGroup>
                    <FormLabel>Full Name *</FormLabel>
                    <FormInput 
                      type="text" 
                      placeholder="Enter your full name" 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </FormGroup>
                ) : (
                  <FormGroup>
                    <FormLabel>Organization Name *</FormLabel>
                    <FormInput 
                      type="text" 
                      placeholder="Enter your organization name" 
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                      required
                    />
                  </FormGroup>
                )}
                
                <FormRow>
                  <FormGroup>
                    <FormLabel>Address *</FormLabel>
                    <FormInput 
                      type="text" 
                      placeholder="Enter your address" 
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>Contact Number *</FormLabel>
                    <FormInput 
                      type="text" 
                      placeholder="Enter your contact number" 
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      required
                    />
                  </FormGroup>
                </FormRow>
                
                <FormRow>
                  <FormGroup>
                    <FormLabel>Email Address *</FormLabel>
                    <FormInput 
                      type="email" 
                      placeholder="Enter your email address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </FormGroup>
                  
                  <FormGroup>
                    <FormLabel>Domain Name *</FormLabel>
                    <FormInput 
                      type="text" 
                      placeholder="e.g., yourdomain.com.np" 
                      value={domainName}
                      onChange={(e) => setDomainName(e.target.value)}
                      required
                    />
                  </FormGroup>
                </FormRow>
                
                <FormGroup>
                  <FormLabel>Purpose of Domain (Optional)</FormLabel>
                  <FormTextarea 
                    placeholder="Briefly describe the purpose of your domain (e.g., business website, personal blog, etc.)" 
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                  />
                </FormGroup>
                
                <ScaleIn delay={0.2}>
                  <GenerateButton 
                    variant="primary" 
                    size="medium" 
                    onClick={generateCoverLetter}
                  >
                    GENERATE COVER LETTER
                  </GenerateButton>
                </ScaleIn>
              </GeneratorForm>
            ) : (
              <PreviewContainer>
                <PreviewTitle>
                  Cover Letter Preview
                  <PreviewActions>
                    <IconButton 
                      onClick={copyToClipboard}
                      title="Copy to clipboard"
                    >
                      {React.createElement(FaIcons.FaCopy as React.ComponentType<IconBaseProps>)}
                    </IconButton>
                    <IconButton 
                      onClick={() => window.print()}
                      title="Print cover letter"
                    >
                      {React.createElement(FaIcons.FaPrint as React.ComponentType<IconBaseProps>)}
                    </IconButton>
                    <IconButton 
                      onClick={downloadAsDocx}
                      title="Download as Word document"
                    >
                      {React.createElement(FaIcons.FaFileWord as React.ComponentType<IconBaseProps>)}
                    </IconButton>
                    <IconButton 
                      onClick={() => setShowPreview(false)}
                      title="Edit information"
                    >
                      {React.createElement(FaIcons.FaEdit as React.ComponentType<IconBaseProps>)}
                    </IconButton>
                  </PreviewActions>
                </PreviewTitle>
                
                <CoverLetterPreview ref={coverLetterRef}>
                  <LetterHeader>
                    <LetterDate>{currentDate}</LetterDate>
                    <LetterAddress>
                      <p>The Registrar</p>
                      <p>Nepal Domain Registration</p>
                      <p>Mercantile Communications Pvt. Ltd.</p>
                      <p>Kathmandu, Nepal</p>
                    </LetterAddress>
                    <LetterSubject>Subject: Application for Domain Registration - <HighlightedText>{domainName}</HighlightedText></LetterSubject>
                  </LetterHeader>
                  
                  <LetterBody>
                    <p>Dear Sir/Madam,</p>
                    
                    <p>
                      I, {applicantType === 'individual' ? fullName : `${fullName}, on behalf of ${organizationName},`} 
                      would like to register the domain name <HighlightedText>{domainName}</HighlightedText> under the .np ccTLD. 
                      I have thoroughly reviewed and understood the terms and conditions for domain registration 
                      as specified on your website.
                    </p>
                    
                    {purpose && (
                      <p>
                        The purpose of this domain is to {purpose.toLowerCase()}. 
                      </p>
                    )}
                    
                    <p>
                      I hereby confirm that all the information provided in the registration process is accurate 
                      and complete. I have attached all the required documents as per the naming conventions 
                      specified in the registration guidelines.
                    </p>
                    
                    <p>
                      {applicantType === 'individual' 
                        ? 'I have attached a scanned copy of my citizenship certificate as required for individual registration.' 
                        : 'I have attached a scanned copy of our organization\'s registration certificate as required for organizational registration.'}
                    </p>
                    
                    <p>
                      Please contact me at the following details if you require any additional information:
                    </p>
                    
                    <p>
                      Address: {address}<br />
                      Contact Number: {contactNumber}<br />
                      Email: {email}
                    </p>
                    
                    <p>
                      I look forward to a favorable response regarding my domain registration application.
                    </p>
                  </LetterBody>
                  
                  <LetterSignature>
                    <p>Sincerely,</p>
                    <p style={{ marginTop: '40px' }}>{applicantType === 'individual' ? fullName : organizationName}</p>
                    {applicantType === 'organization' && <p>{fullName}</p>}
                  </LetterSignature>
                </CoverLetterPreview>
              </PreviewContainer>
            )}
            
            <InfoSection>
              <h2>How to Use This Tool</h2>
              <p>
                This tool helps you generate a professional cover letter for your .com.np domain registration in Nepal. 
                Follow these simple steps to create your cover letter:
              </p>
              <StepsList>
                <li>Select whether you are applying as an individual or an organization</li>
                <li>Fill in your personal or organizational details</li>
                <li>Enter the domain name you wish to register</li>
                <li>Optionally, describe the purpose of your domain</li>
                <li>Click "Generate Cover Letter" to create your cover letter</li>
                <li>Preview, print, or download your cover letter</li>
              </StepsList>
              <p>
                Once generated, you can copy, print, or download your cover letter as a Word document. 
                Submit this cover letter along with other required documents to complete your domain registration.
              </p>
            </InfoSection>
            
            <GuideSection>
              <FadeIn>
                <GuideTitle>Complete Guide to .np Domain Registration</GuideTitle>
                
                <GuideSubtitle>Understanding the .np Domain</GuideSubtitle>
                <GuideParagraph>
                  In the context of internet domains, the .np domain serves as a unique identifier for websites originating from Nepal, 
                  thereby cementing a solid web presence for Nepalese residents and businesses.
                </GuideParagraph>
                <GuideParagraph>
                  The importance of promoting local businesses with .np domains is crucial for strengthening the local digital economy 
                  and highlighting the unique offerings of Nepalese enterprises. This domain extension not only enhances visibility 
                  but also boosts credibility in the virtual realm.
                </GuideParagraph>
                <GuideParagraph>
                  However, challenges of managing and maintaining .np domain registrations persist. These include ensuring domain name security, 
                  combating cybersquatting, and dealing with technical issues.
                </GuideParagraph>
                <GuideParagraph>
                  Despite these obstacles, the .np domain continues to be a pivotal tool for securing a safe and respected digital presence 
                  for Nepalese entities in the global online landscape.
                </GuideParagraph>
                
                <GuideSubtitle>Eligibility and Registration Guidelines</GuideSubtitle>
                <GuideParagraph>
                  To secure a .np domain, one must first meet the eligibility criteria and adhere to the registration guidelines set forth 
                  by the governing body. This domain is exclusively for Nepalese residents and businesses, establishing the importance of 
                  local web presence.
                </GuideParagraph>
                <GuideParagraph>
                  The impact of .np domains on Nepalese businesses is substantial as it enhances their credibility and authenticity, 
                  specifically targeting the local audience.
                </GuideParagraph>
                <GuideParagraph>
                  The registration is cost-free and operates on a first-come-first-serve basis, subject to terms and conditions. 
                  The documents required for registration vary for personal and official requests, ensuring safety and genuine connections to Nepal.
                </GuideParagraph>
                <GuideParagraph>
                  Hence, securing a .np domain is an effective strategy for businesses aiming to solidify their web presence in the 
                  rapidly expanding Nepalese market.
                </GuideParagraph>
                
                <GuideSubtitle>Advantages of the .np Domain</GuideSubtitle>
                <GuideParagraph>
                  Building on the importance of local web presence, the .np domain offers a plethora of advantages for businesses and 
                  individuals alike in Nepal. This country-specific domain plays a crucial role in boosting local SEO, making websites 
                  more visible to the Nepalese audience. It enhances the credibility of a business, showing that it has a genuine 
                  connection to Nepal.
                </GuideParagraph>
                <GuideParagraph>
                  The .np domain also contributes to the marketing potential of a website, serving as a unique identifier that stands out 
                  in search results. This can lead to increased traffic and customer engagement. Moreover, its use fosters a sense of 
                  safety and trustworthiness among users.
                </GuideParagraph>
                <GuideParagraph>
                  With these benefits, securing a .np domain is a strategic move for strengthening online visibility and security.
                </GuideParagraph>
                
                <GuideSubtitle>Documentation for .np Registration</GuideSubtitle>
                <GuideParagraph>
                  A specific set of documents is required for successful registration of a .np domain, depending on whether the application 
                  is for official or personal use.
                </GuideParagraph>
                <GuideParagraph>
                  For the official use, you will need to provide certification of business registration, PAN/VAT certification, and a 
                  request letter on the company's letterhead.
                </GuideParagraph>
                <GuideParagraph>
                  For personal use, a copy of the citizenship certificate, passport, or driving license is required.
                </GuideParagraph>
                <GuideParagraph>
                  The application process is streamlined and secure. After collecting the required documents, applicants can initiate the 
                  registration process by creating an account on the official .np domain registration site.
                </GuideParagraph>
                <GuideParagraph>
                  The uploaded documents are then verified by the Mercantile Communications Pvt. Ltd., which is responsible for managing 
                  .np ccTLDs.
                </GuideParagraph>
                <GuideParagraph>
                  The registration process protects your digital identity, ensuring safety and security.
                </GuideParagraph>
                
                <GuideSubtitle>Available .np Domains for Usage</GuideSubtitle>
                <GuideParagraph>
                  Diversifying your web presence in Nepal becomes easier with the variety of .np domains available for registration, 
                  each catering to specific user groups and purposes. Expanding the reach of businesses, these domains target the 
                  Nepalese audience effectively.
                </GuideParagraph>
                <GuideParagraph>
                  Navigating the options, here are some .np domains:
                </GuideParagraph>
                <BulletList>
                  <li><strong>.com.np:</strong> Suitable for all entities, particularly businesses.</li>
                  <li><strong>.org.np:</strong> Ideal for non-profit organizations.</li>
                  <li><strong>.edu.np:</strong> Reserved for educational institutions.</li>
                  <li><strong>.gov.np:</strong> Exclusively for Nepal governmental entities.</li>
                  <li><strong>.net.np:</strong> Best for networks or umbrella sites.</li>
                </BulletList>
                <GuideParagraph>
                  Choosing the right .np domain extension for your website ensures an amplified local presence. Secure your free Nepalese 
                  web presence now with the right .np domain, reinforcing your authenticity and credibility in the expanding Nepalese market.
                </GuideParagraph>
                
                <GuideSubtitle>Process To Register A .Com.Np Domain</GuideSubtitle>
                <GuideParagraph>
                  <strong>Registering for a .com.np Domain</strong>
                </GuideParagraph>
                <GuideParagraph>
                  To initiate the process of registering for a .com.np domain, you must first navigate to the Register page on the official website. 
                  Once there, validate your registration via your email address. Check the availability of your desired domain name, considering 
                  that the benefits of having a .com.np domain include both local and global recognition.
                </GuideParagraph>
                <GuideParagraph>
                  Register as a user or create a new user account, and proceed to the 'Apply new domain' section. Carefully understanding the 
                  terms and conditions is crucial for a seamless registration. Lastly, submit the required documents following the correct 
                  naming conventions.
                </GuideParagraph>
                <GuideParagraph>
                  This meticulous process ensures the secure and successful registration of your .com.np domain.
                </GuideParagraph>
                
                <GuideSubtitle>Applying for Your New Domain</GuideSubtitle>
                <GuideParagraph>
                  The transition from registration to actual application for your desired .com.np domain involves several pivotal steps to 
                  ensure a smooth and successful process.
                </GuideParagraph>
                <GuideParagraph>
                  Begin by accessing the 'Apply new domain' section on the registrar's website. Here, you input your desired domain and 
                  verify its availability.
                </GuideParagraph>
                <GuideParagraph>
                  The domain registration process mandates that you accept the Terms and Conditions, correctly fill in the required fields 
                  with accurate contact details, and specify your name servers.
                </GuideParagraph>
                <GuideParagraph>
                  Following this, you will need to submit necessary documents such as proof of citizenship for individuals or a registration 
                  certificate for organizations. It is crucial to follow the naming conventions when uploading these files.
                </GuideParagraph>
                <GuideParagraph>
                  The benefits of having a .com.np domain are numerous, including local brand recognition and improved search engine ranking.
                </GuideParagraph>
                
                <GuideSubtitle>Understanding the Terms and Conditions</GuideSubtitle>
                <GuideParagraph>
                  Understanding the Terms and Conditions is an essential step in the .com.np domain registration process, as it ensures 
                  compliance with legal and procedural requirements.
                </GuideParagraph>
                <BulletList>
                  <li><strong>Understanding Domain Ownership:</strong> Familiarize yourself with the ownership policies to properly manage your domain.</li>
                  <li><strong>Reading the Terms and Conditions:</strong> Thoroughly read and understand these rules to avoid potential legal issues.</li>
                  <li><strong>Acceptance of Terms:</strong> By proceeding with registration, you agree to abide by the stipulated terms and conditions.</li>
                  <li><strong>Troubleshooting Common Domain Registration Issues:</strong> Knowledge of the terms can help in resolving common issues such as domain disputes or transfer processes.</li>
                </BulletList>
                
                <GuideSubtitle>Document Submission Process</GuideSubtitle>
                <GuideParagraph>
                  After ensuring compliance with the terms and conditions, the next pivotal step in the .com.np domain registration process 
                  involves submitting the required documents. This part of the process, often referred to as the document submission requirements, 
                  is critical to successfully securing your domain.
                </GuideParagraph>
                <GuideParagraph>
                  For individuals, scanned images of citizenship and a cover letter are required. Organizations, on the other hand, must provide 
                  registration certificates and a cover letter.
                </GuideParagraph>
                <GuideParagraph>
                  To avoid troubleshooting domain registration issues, it is critical to adhere to the assigned naming conventions for the 
                  scanned image files. Once the documents are ready for submission, they should be uploaded via the document submission window 
                  followed by clicking the 'Request Domain' button to complete the process.
                </GuideParagraph>
                
                <GuideSubtitle>Naming Conventions for Files</GuideSubtitle>
                <GuideParagraph>
                  Adherence to the prescribed naming conventions for scanned image files is an integral part of the .com.np domain registration 
                  process. These guidelines ensure the integrity and security of your domain, while promoting optimal search engine rankings.
                </GuideParagraph>
                <BulletList>
                  <li><strong>Consistency:</strong> Maintain a uniform pattern in naming your files for easy recognition and retrieval.</li>
                  <li><strong>Simplicity:</strong> Avoid complicated or lengthy filenames. Use alphanumeric characters without spaces or special symbols.</li>
                  <li><strong>Date Format:</strong> Use a standard date format such as YYYYMMDD for time-specific files.</li>
                  <li><strong>Versioning:</strong> If multiple versions of a file exist, specify the version in the filename.</li>
                </BulletList>
                <GuideParagraph>
                  These practices offer multiple benefits for businesses using a .com.np domain, including improved website optimization and 
                  enhanced user experience.
                </GuideParagraph>
                
                <GuideSubtitle>Checking Your Application Status</GuideSubtitle>
                <GuideParagraph>
                  Regularly monitoring the status of your .com.np domain application is a crucial step in the registration process. Access your 
                  dashboard to check the status of your domain application. It may take 2-3 working days for the request to be processed.
                </GuideParagraph>
                <GuideParagraph>
                  If approved, domains will be listed under the 'Active domain' section; if rejected, troubleshooting domain registration issues 
                  becomes necessary. In case of rejection, review the steps and conventions and address persisting issues. This diligent monitoring 
                  ensures safety and efficiency in acquiring a .com.np domain, a significant asset for businesses.
                </GuideParagraph>
                <GuideParagraph>
                  The benefits of having a .com.np domain for businesses are numerous, including local recognition, trust, and greater visibility 
                  in Nepal. Stay proactive in the registration process to enjoy these advantages.
                </GuideParagraph>
                
                <GuideSubtitle>Handling Application Rejection</GuideSubtitle>
                <GuideParagraph>
                  In the unfortunate event that your .com.np domain application is rejected, it is essential to take a systematic approach to 
                  rectify any issues and resubmit your application.
                </GuideParagraph>
                <BulletList>
                  <li><strong>Identify the Reason:</strong> Understanding the reasons for domain application rejection is the first step. It could be due to improper documentation or failure to comply with the terms and conditions.</li>
                  <li><strong>Address the Issues:</strong> Next, meticulously address the identified issues. Ensure your submitted documents are accurate and complete.</li>
                  <li><strong>Resubmit the Application:</strong> Once the issues are resolved, resubmit your application.</li>
                  <li><strong>Seek Guidance:</strong> If the problem persists, consider seeking expert advice.</li>
                </BulletList>
                <GuideParagraph>
                  Following these tips for addressing and resolving domain application issues will increase your chances of approval, ensuring 
                  a secure online presence.
                </GuideParagraph>
                
                <GuideSubtitle>Additional Information and Support</GuideSubtitle>
                <GuideParagraph>
                  The process of obtaining your .com.np domain does not end with approval, as there is a wealth of additional information and 
                  support available to help you make the most of your new domain.
                </GuideParagraph>
                <GuideParagraph>
                  One crucial aspect involves troubleshooting domain name linking issues, which may arise during the setup process. This ensures 
                  the safety and stability of your domain.
                </GuideParagraph>
                <GuideParagraph>
                  Also, understanding the benefits of using a .com.np domain for your business is essential. It enhances your local brand visibility, 
                  improves SEO rankings, and builds customer trust.
                </GuideParagraph>
                <GuideParagraph>
                  Moreover, the support team provides technical assistance and guidance on domain management, ensuring that your online presence 
                  remains strong and secure.
                </GuideParagraph>
                <GuideParagraph>
                  Keep abreast of these resources to fully leverage the advantages of your .com.np domain.
                </GuideParagraph>
              </FadeIn>
            </GuideSection>
          </FadeIn>
        </GeneratorContainer>
      </section>
    </Layout>
  );
};

export default DomainCoverLetterGenerator;
