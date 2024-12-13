export interface UserInfo {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    phoneNumber: String,
    location: UserLocation,
    bio: String,
    profileImageUrl: String,
    specialty: String,
    socialMediaLinks: Object
}

export interface UserError {
    error: string
}

export interface User {
    artisan: UserInfo,
    "Auth-Token": string
}

interface UserLocation {
    country: String,
    city: String
}

export type ServerResponse = User | UserError;
