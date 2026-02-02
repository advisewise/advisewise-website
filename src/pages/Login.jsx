import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Login.module.css';

const Login = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [docStep, setDocStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Details
    fullName: '',
    email: '',
    phone: '',
    address: '',
    country: '',

    // Qualification
    qualification: '',
    department: '',
    passingYear: '',
    marksPercentage: '',
    certificateType: '',

    // Preference
    countryPreference: '',
    referenceType: '',
    remarks: '',

    // Documentation
    tenthMarkSheet: null,
    twelfthMarkSheet: null,
    passport: null,
    portfolio: null,
    cv: null,
    semesterSheets: null,
    degreeCertificate: null,
    provisionalCertificate: null,
    consolidatedMarkSheet: null,
    workExperience: null,
    moi: null,
    lor: null,
    sop: null,
    englishTest: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName && formData.email && formData.phone && formData.country;
      case 2:
        return formData.qualification && formData.department && formData.passingYear;
      case 3:
        return formData.countryPreference;
      case 4:
        return true;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (currentStep === 4) {
      if (docStep < 3) {
        setDocStep(docStep + 1);
      } else {
        handleSubmit();
      }
    } else if (validateStep()) {
      setCurrentStep(currentStep + 1);
    } else {
      alert('Please fill all required fields');
    }
  };

  const prevStep = () => {
    if (currentStep === 4 && docStep > 1) {
      setDocStep(docStep - 1);
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step) => {
    if (step < currentStep) {
      setCurrentStep(step);
      if (step !== 4) setDocStep(1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully! We will contact you soon.');
  };

  return (
    <div className={styles.loginPage}>
      <motion.div
        className={styles.formContainer}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Side - Steps */}
        <div className={styles.formLeft}>
          <div className={styles.logo}>
            <img src="/images/logo.png" alt="Advisewise Logo" />
          </div>
          <h2>Registration Steps</h2>
          <ul className={styles.steps}>
            <li
              className={currentStep >= 1 ? styles.active : ''}
              onClick={() => goToStep(1)}
            >
              <span>1</span>
              Personal Details
            </li>
            <li
              className={currentStep >= 2 ? styles.active : ''}
              onClick={() => goToStep(2)}
            >
              <span>2</span>
              Qualification
            </li>
            <li
              className={currentStep >= 3 ? styles.active : ''}
              onClick={() => goToStep(3)}
            >
              <span>3</span>
              Preference
            </li>
            <li
              className={currentStep >= 4 ? styles.active : ''}
              onClick={() => goToStep(4)}
            >
              <span>4</span>
              Documentation
            </li>
          </ul>
        </div>

        {/* Right Side - Form */}
        <div className={styles.formRight}>
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Personal Details</h3>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select Country *</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className={`${styles.formGroup} ${styles.full}`}>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </motion.div>
            )}

            {/* Step 2: Qualification */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Qualification Details</h3>
                <div className={styles.formGroup}>
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select Qualification *</option>
                    <option value="High School">High School</option>
                    <option value="Bachelor's">Bachelor's Degree</option>
                    <option value="Master's">Master's Degree</option>
                    <option value="PhD">PhD</option>
                    <option value="Diploma">Diploma</option>
                  </select>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select Department *</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Medicine">Medicine</option>
                    <option value="Business">Business</option>
                    <option value="Arts">Arts</option>
                    <option value="Science">Science</option>
                    <option value="Law">Law</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="passingYear"
                    placeholder="Passing Year *"
                    value={formData.passingYear}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="marksPercentage"
                    placeholder="Marks/Percentage"
                    value={formData.marksPercentage}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <select
                    name="certificateType"
                    value={formData.certificateType}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Certificate Type</option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                    <option value="State Board">State Board</option>
                    <option value="IB">International Baccalaureate</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </motion.div>
            )}

            {/* Step 3: Preference */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Your Preferences</h3>
                <div className={styles.formGroup}>
                  <select
                    name="countryPreference"
                    value={formData.countryPreference}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Preferred Country *</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Ireland">Ireland</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Russia">Russia</option>
                    <option value="Philippines">Philippines</option>
                  </select>
                  <select
                    name="referenceType"
                    value={formData.referenceType}
                    onChange={handleChange}
                  >
                    <option value="" disabled>How did you hear about us?</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Friend">Friend/Family</option>
                    <option value="Google">Google Search</option>
                    <option value="Advertisement">Advertisement</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className={`${styles.formGroup} ${styles.full}`}>
                  <textarea
                    name="remarks"
                    placeholder="Any specific remarks or requirements..."
                    value={formData.remarks}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>
              </motion.div>
            )}

            {/* Step 4: Documentation */}
            {currentStep === 4 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3>Documentation (Step {docStep} of 3)</h3>

                {/* Doc Step 1 */}
                {docStep === 1 && (
                  <>
                    <div className={styles.formGroup}>
                      <label className={styles.fileLabel}>
                        10th Mark Sheet
                        <input
                          type="file"
                          name="tenthMarkSheet"
                          onChange={handleChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                      </label>
                      <label className={styles.fileLabel}>
                        12th Mark Sheet
                        <input
                          type="file"
                          name="twelfthMarkSheet"
                          onChange={handleChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.fileLabel}>
                        Passport
                        <input
                          type="file"
                          name="passport"
                          onChange={handleChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                      </label>
                      <label className={styles.fileLabel}>
                        Portfolio (if any)
                        <input
                          type="file"
                          name="portfolio"
                          onChange={handleChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.fileLabel}>
                        CV / Resume
                        <input
                          type="file"
                          name="cv"
                          onChange={handleChange}
                          accept=".pdf,.doc,.docx"
                        />
                      </label>
                    </div>
                  </>
                )}

                {/* Doc Step 2 */}
                {docStep === 2 && (
                  <>
                    <div className={styles.formGroup}>
                      <label className={styles.fileLabel}>
                        Semester Mark Sheets
                        <input
                          type="file"
                          name="semesterSheets"
                          onChange={handleChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                          multiple
                        />
                      </label>
                      <label className={styles.fileLabel}>
                        Degree Certificate
                        <input
                          type="file"
                          name="degreeCertificate"
                          onChange={handleChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.fileLabel}>
                        Provisional Certificate
                        <input
                          type="file"
                          name="provisionalCertificate"
                          onChange={handleChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                      </label>
                      <label className={styles.fileLabel}>
                        Consolidated Mark Sheet
                        <input
                          type="file"
                          name="consolidatedMarkSheet"
                          onChange={handleChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.fileLabel}>
                        Work Experience (if any)
                        <input
                          type="file"
                          name="workExperience"
                          onChange={handleChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                      </label>
                    </div>
                  </>
                )}

                {/* Doc Step 3 */}
                {docStep === 3 && (
                  <>
                    <div className={styles.formGroup}>
                      <label className={styles.fileLabel}>
                        Medium of Instruction (MOI)
                        <input
                          type="file"
                          name="moi"
                          onChange={handleChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                      </label>
                      <label className={styles.fileLabel}>
                        Letter of Recommendation (LOR)
                        <input
                          type="file"
                          name="lor"
                          onChange={handleChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.fileLabel}>
                        Statement of Purpose (SOP)
                        <input
                          type="file"
                          name="sop"
                          onChange={handleChange}
                          accept=".pdf,.doc,.docx"
                        />
                      </label>
                      <label className={styles.fileLabel}>
                        English Test Score (IELTS/TOEFL)
                        <input
                          type="file"
                          name="englishTest"
                          onChange={handleChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                      </label>
                    </div>
                  </>
                )}
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className={styles.buttonGroup}>
              {(currentStep > 1 || docStep > 1) && (
                <button type="button" className={`${styles.btn} ${styles.btnPrev}`} onClick={prevStep}>
                  Previous
                </button>
              )}
              <button type="button" className={styles.btn} onClick={nextStep}>
                {currentStep === 4 && docStep === 3 ? 'Submit' : 'Next'}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
