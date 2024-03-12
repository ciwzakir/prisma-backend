export const userTypeDefs = `
  type User {
    id         : ID!
    name       : String!
    email      : String!
    userRole   : AllowedUserRole!
    createdAt  : String!
    posts      : [Post]
    products   : [Product]
    profile    : Profile
  }

  enum AllowedUserRole{
    student
    faculty
    admin
    super_admin
    gql_user
  }

  
  type BioFeature {
    id                      : ID!
    bio                     : Profile
    userName                : UserFullName
    userAddress             : UserAddress
    educationQualifications : [UserEducation]
    personalInformation     : UserPersonalInfo
    }
    
  type UserNameResponse {
    message : String
    nameInfo : UserFullName
    }
    
  type UserFullName {
    id         : ID!
    firstName  : String!
    middleName : String
    lastName   : String!
    }
    
  type UserAddressResponse {
    message : String
    address : UserAddress
      }
    
  type UserAddress {
    id        : ID!
    street    : String
    city      : String
    zipCode   : String
     }
    
  type UserEducationResponse {
    message : String
    qualificationInfo : UserEducation
    }
    
  type UserEducation {
    id             : ID!
    qualification  : String
    fieldOfStudy   : String
    instituteName  : String
    graduationYear : Int
    obtainGrade    : String
      }
    
  type UserPersonalInfoResponse {
    message : String
    personalInfo : UserPersonalInfo
    }
    
  type UserPersonalInfo {
    id             : ID!
    age            : String
    gender         : String
    maritalStatus  : String
    nationality    : String
    phoneNumber    : String
    bloodGroup     : String
     }
    
    type ProfileResponse {
        message : String
        profile : Profile
        }
            
    type UserAuthPayload {
        userErrorMessage : String
        token            : String
        }

    type UserCompleteBioDataResponse {
        message : String
        bioInfo : BioFeature
        }
    
    type Profile {
        id         : ID!
        user       : User!
        biodata    : BioFeature
        products   : Product
        }
    
    input UserBioDataPayload {
        userName                : UserNamePayload
        userAddress             : UserAddressPayload
        educationQualifications : [UserEducationPayload]
        personalInformation     : UserPersonalInfoPayload
         }
    
    input UserNamePayload {
        firstName  : String!
        middleName : String
        lastName   : String!
         }
    
    input UserAddressPayload {
        street    : String
        city      : String
        zipCode   : String
         }
    
    input UserEducationPayload {
        qualification  : String
        fieldOfStudy   : String
        instituteName  : String
        graduationYear : Int
        obtainGrade    : String
         }
    
    input UserPersonalInfoPayload {
        age            : String
        gender         : String
        maritalStatus  : String
        nationality    : String
        phoneNumber    : String
        bloodGroup     : String
         }
    input UserBioDataPayload {
        userName                : UserNamePayload
        userAddress             : UserAddressPayload
        educationQualifications : [UserEducationPayload]
        personalInformation     : UserPersonalInfoPayload
         }
    
    input UserNamePayload {
        firstName  : String!
        middleName : String
        lastName   : String!
         }
    
    input UserAddressPayload {
        street    : String
        city      : String
        zipCode   : String
         }
    
    input UserEducationPayload {
        qualification  : String
        fieldOfStudy   : String
        instituteName  : String
        graduationYear : Int
        obtainGrade    : String
         }
    
    input UserPersonalInfoPayload {
        age            : String
        gender         : String
        maritalStatus  : String
        nationality    : String
        phoneNumber    : String
        bloodGroup     : String
         }
         
    input UserBioDataPayload {
            userName                : UserNamePayload
            userAddress             : UserAddressPayload
            educationQualifications : [UserEducationPayload]
            personalInformation     : UserPersonalInfoPayload
             }
        
    input UserNamePayload {
            firstName  : String!
            middleName : String
            lastName   : String!
             }
        
    input UserAddressPayload {
            street    : String
            city      : String
            zipCode   : String
             }
        
    input UserEducationPayload {
            qualification  : String
            fieldOfStudy   : String
            instituteName  : String
            graduationYear : Int
            obtainGrade    : String
             }
        
    input UserPersonalInfoPayload {
            age            : String
            gender         : String
            maritalStatus  : String
            nationality    : String
            phoneNumber    : String
            bloodGroup     : String
             }
`;
