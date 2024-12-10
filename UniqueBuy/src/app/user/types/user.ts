export interface User {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phoneNumber: String,
    location: UserLocation,
    bio: String,
    profileImageUrl:String,
    specialty: String,
    socialMediaLinks: Object
}

interface UserLocation {
    country: String,
    city: String
}