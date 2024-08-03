//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.0.8.0 (NJsonSchema v11.0.1.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming



export type AppointmentStatus = 0 | 1 | 2 | 3;

export interface CreateAppointmentCommand {
    patientId: string;
    doctorScheduleSlotId: number;
    readonly roles: string[] | null;
}

export interface CreateAppointmentReportCommand {
    title: string | null;
    detail: string | null;
    appointmentID: string;
    readonly roles: string[] | null;
}

export interface CreateCityCommand {
    name: string | null;
    countryID: number;
    readonly roles: string[] | null;
}

export interface CreateCountryCommand {
    name: string | null;
    readonly roles: string[] | null;
}

export interface CreateDepartmentCommand {
    name: string | null;
    readonly roles: string[] | null;
}

export interface CreateDistrictCommand {
    name: string | null;
    cityID: number;
    readonly roles: string[] | null;
}

export interface CreateDoctorCommand {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    password: string | null;
    phoneNumber: string | null;
    about: string | null;
    education: string | null;
    profilePhoto: string | null;
    doctorTitleID: number;
    hospitalDepartmentID: number;
    readonly roles: string[] | null;
}

export interface CreateDoctorScheduleSlotCommand {
    date: Date;
    startTime: string;
    endTime: string;
    isPassive: boolean;
    doctorID: string;
    readonly roles: string[] | null;
}

export interface CreateDoctorTitleCommand {
    name: string | null;
    levelIndex: number;
    readonly roles: string[] | null;
}

export interface CreateFaqCommand {
    question: string | null;
    answer: string | null;
}

export interface CreateFeedbackCommand {
    title: string | null;
    message: string | null;
    userID: string;
    readonly roles: string[] | null;
}

export interface CreateHospitalAddressCommand {
    title: string | null;
    detail: string | null;
    hospitalID: number;
    quarterID: number;
    readonly roles: string[] | null;
}

export interface CreateHospitalCommand {
    name: string | null;
    readonly roles: string[] | null;
}

export interface CreateHospitalDepartmentCommand {
    hospitalID: number;
    departmentID: number;
    readonly roles: string[] | null;
}

export interface CreateOperationClaimCommand {
    name: string | null;
    readonly roles: string[] | null;
}

export interface CreatePatientCommand {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    password: string | null;
    phoneNumber: string | null;
    profilePhoto: string | null;
    readonly roles: string[] | null;
}

export interface CreateQuarterCommand {
    name: string | null;
    districtID: number;
    readonly roles: string[] | null;
}

export interface CreateUserCommand {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    password: string | null;
    readonly roles: string[] | null;
}

export interface CreateUserOperationClaimCommand {
    userId: string;
    operationClaimId: number;
    readonly roles: string[] | null;
}

export interface CreatedAppointmentReportResponse {
    id: number;
    title: string | null;
    detail: string | null;
    appointmentID: string;
}

export interface CreatedAppointmentResponse {
    id: string;
    doctorTitle: string | null;
    doctorFirstName: string | null;
    doctorLastName: string | null;
    patientFirstName: string | null;
    patientLastName: string | null;
    patientEmail: string | null;
    hospitalName: string | null;
    departmentName: string | null;
    date: Date;
    startTime: string;
    endTime: string;
    status: AppointmentStatus;
    patientId: string;
    doctorId: string;
    doctorScheduleSlotId: number;
}

export interface CreatedCityResponse {
    id: number;
    name: string | null;
    countryID: number;
}

export interface CreatedCountryResponse {
    id: number;
    name: string | null;
}

export interface CreatedDepartmentResponse {
    id: number;
    name: string | null;
}

export interface CreatedDistrictResponse {
    id: number;
    name: string | null;
    cityID: number;
}

export interface CreatedDoctorResponse {
    id: string;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phoneNumber: string | null;
    about: string | null;
    education: string | null;
    profilePhoto: string | null;
    doctorTitleID: number;
    hospitalDepartmentID: number;
}

export interface CreatedDoctorScheduleSlotResponse {
    id: number;
    date: Date;
    startTime: string;
    endTime: string;
    isPassive: boolean;
    doctorID: string;
}

export interface CreatedDoctorTitleResponse {
    id: number;
    name: string | null;
    levelIndex: number;
}

export interface CreatedFaqResponse {
    id: number;
    question: string | null;
    answer: string | null;
}

export interface CreatedFeedbackResponse {
    id: number;
    title: string | null;
    message: string | null;
    userID: string;
}

export interface CreatedHospitalAddressResponse {
    id: number;
    title: string | null;
    detail: string | null;
    quarterID: number;
    hospitalID: number;
}

export interface CreatedHospitalDepartmentResponse {
    id: number;
    hospitalID: number;
    departmentID: number;
}

export interface CreatedHospitalResponse {
    id: number;
    name: string | null;
}

export interface CreatedPatientResponse {
    id: string;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phoneNumber: string | null;
    profilePhoto: string | null;
}

export interface CreatedQuarterResponse {
    id: number;
    name: string | null;
    districtID: number;
}

export interface DeleteOperationClaimCommand {
    id: number;
    readonly roles: string[] | null;
}

export interface DeleteUserCommand {
    id: string;
    readonly roles: string[] | null;
}

export interface DeleteUserOperationClaimCommand {
    id: string;
    readonly roles: string[] | null;
}

export interface DeletedAppointmentReportResponse {
    id: number;
}

export interface DeletedAppointmentResponse {
    id: string;
}

export interface DeletedCityResponse {
    id: number;
}

export interface DeletedCountryResponse {
    id: number;
}

export interface DeletedDepartmentResponse {
    id: number;
}

export interface DeletedDistrictResponse {
    id: number;
}

export interface DeletedDoctorResponse {
    id: string;
}

export interface DeletedDoctorScheduleSlotResponse {
    id: number;
}

export interface DeletedDoctorTitleResponse {
    id: number;
}

export interface DeletedFaqResponse {
    id: number;
}

export interface DeletedFeedbackResponse {
    id: number;
}

export interface DeletedHospitalAddressResponse {
    id: number;
}

export interface DeletedHospitalDepartmentResponse {
    id: number;
}

export interface DeletedHospitalResponse {
    id: number;
}

export interface DeletedPatientResponse {
    id: string;
}

export interface DeletedQuarterResponse {
    id: number;
}

export interface GetByIdAppointmentReportResponse {
    id: number;
    title: string | null;
    detail: string | null;
    appointmentID: string;
}

export interface GetByIdAppointmentResponse {
    id: string;
    status: AppointmentStatus;
    patientId: string;
    doctorScheduleSlotId: number;
    firstName: string | null;
    lastName: string | null;
}

export interface GetByIdCityResponse {
    id: number;
    name: string | null;
    countryID: number;
    countryName: string | null;
}

export interface GetByIdCountryResponse {
    id: number;
    name: string | null;
}

export interface GetByIdDepartmentResponse {
    id: number;
    name: string | null;
}

export interface GetByIdDistrictResponse {
    id: number;
    name: string | null;
    cityID: number;
    cityName: string | null;
    countryID: number;
    countryName: string | null;
}

export interface GetByIdDoctorResponse {
    id: string;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phoneNumber: string | null;
    about: string | null;
    education: string | null;
    profilePhoto: string | null;
    doctorTitleID: number;
    hospitalDepartmentID: number;
}

export interface GetByIdDoctorScheduleSlotResponse {
    id: number;
    date: Date;
    startTime: string;
    endTime: string;
    isPassive: boolean;
    doctorID: string;
}

export interface GetByIdDoctorTitleResponse {
    id: number;
    name: string | null;
    levelIndex: number;
}

export interface GetByIdFaqResponse {
    id: number;
    question: string | null;
    answer: string | null;
}

export interface GetByIdFeedbackResponse {
    id: number;
    title: string | null;
    message: string | null;
    userID: string;
}

export interface GetByIdHospitalAddressResponse {
    id: number;
    title: string | null;
    detail: string | null;
    hospitalID: number;
    hospitalName: string | null;
    quarterID: number;
    quarterName: string | null;
    districtID: number;
    districtName: string | null;
    cityID: number;
    cityName: string | null;
    countryID: number;
    countryName: string | null;
}

export interface GetByIdHospitalDepartmentResponse {
    id: number;
    hospitalID: number;
    departmentID: number;
    hospitalName: string | null;
    departmentName: string | null;
}

export interface GetByIdHospitalResponse {
    id: number;
    name: string | null;
    hospitalAddressID: number;
}

export interface GetByIdPatientResponse {
    id: string;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phoneNumber: string | null;
    profilePhoto: string | null;
}

export interface GetByIdQuarterResponse {
    id: number;
    name: string | null;
    districtID: number;
    districtName: string | null;
    cityID: number;
    cityName: string | null;
    countryID: number;
    countryName: string | null;
}

export interface GetDoctorSchedulesByDoctorIdResponse {
    id: number;
    doctorID: string;
    date: Date;
    startTime: string;
    endTime: string;
    firstName: string | null;
    lastName: string | null;
    doctorTitleID: number;
    doctorTitleName: string | null;
}

export interface GetListAppointmentQuery {
    pageRequest: PageRequest;
    readonly roles: string[] | null;
}

export interface GetListAppointmentReportQuery {
    pageRequest: PageRequest;
    readonly roles: string[] | null;
}

export interface GetListCityQuery {
    pageRequest: PageRequest;
    readonly roles: string[] | null;
}

export interface GetListCountryListItemDto {
    id: number;
    name: string | null;
}

export interface GetListCountryListItemDtoGetListResponse {
    index: number;
    size: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
    items: GetListCountryListItemDto[] | null;
}

export interface GetListDepartmentQuery {
    pageRequest: PageRequest;
    readonly roles: string[] | null;
}

export interface GetListDistrictQuery {
    pageRequest: PageRequest;
    readonly roles: string[] | null;
}

export interface GetListDoctorQuery {
    pageRequest: PageRequest;
    readonly roles: string[] | null;
}

export interface GetListDoctorScheduleSlotQuery {
    pageRequest: PageRequest;
    readonly roles: string[] | null;
}

export interface GetListDoctorTitleQuery {
    pageRequest: PageRequest;
    readonly roles: string[] | null;
}

export interface GetListFaqQuery {
    pageRequest: PageRequest;
}

export interface GetListFeedbackQuery {
    pageRequest: PageRequest;
    readonly roles: string[] | null;
}

export interface GetListHospitalAddressQuery {
    pageRequest: PageRequest;
    readonly roles: string[] | null;
}

export interface GetListHospitalDepartmentQuery {
    pageRequest: PageRequest;
    readonly roles: string[] | null;
}

export interface GetListHospitalQuery {
    pageRequest: PageRequest;
    readonly roles: string[] | null;
}

export interface GetListPatientQuery {
    pageRequest: PageRequest;
    readonly roles: string[] | null;
}

export interface GetListQuarterQuery {
    pageRequest: PageRequest;
    readonly roles: string[] | null;
}

export interface PageRequest {
    pageIndex: number;
    pageSize: number;
}

export interface UpdateAppointmentCommand {
    id: string;
    status: AppointmentStatus;
    patientId: string;
    doctorScheduleSlotId: number;
    readonly roles: string[] | null;
}

export interface UpdateAppointmentReportCommand {
    id: number;
    title: string | null;
    detail: string | null;
    appointmentID: string;
    readonly roles: string[] | null;
}

export interface UpdateCityCommand {
    id: number;
    name: string | null;
    countryID: number;
    readonly roles: string[] | null;
}

export interface UpdateCountryCommand {
    id: number;
    name: string | null;
    readonly roles: string[] | null;
}

export interface UpdateDepartmentCommand {
    id: number;
    name: string | null;
    readonly roles: string[] | null;
}

export interface UpdateDistrictCommand {
    id: number;
    name: string | null;
    cityID: number;
    readonly roles: string[] | null;
}

export interface UpdateDoctorCommand {
    id: string;
    firstName: string | null;
    lastName: string | null;
    phoneNumber: string | null;
    about: string | null;
    education: string | null;
    profilePhoto: string | null;
    doctorTitleID: number;
    hospitalDepartmentID: number;
    readonly roles: string[] | null;
}

export interface UpdateDoctorScheduleSlotCommand {
    id: number;
    date: Date;
    startTime: string;
    endTime: string;
    isPassive: boolean;
    doctorID: string;
    readonly roles: string[] | null;
}

export interface UpdateDoctorTitleCommand {
    id: number;
    name: string | null;
    levelIndex: number;
    readonly roles: string[] | null;
}

export interface UpdateFaqCommand {
    id: number;
    question: string | null;
    answer: string | null;
}

export interface UpdateFeedbackCommand {
    id: number;
    title: string | null;
    message: string | null;
    userID: string;
    readonly roles: string[] | null;
}

export interface UpdateHospitalAddressCommand {
    id: number;
    title: string | null;
    detail: string | null;
    hospitalID: number;
    quarterID: number;
    readonly roles: string[] | null;
}

export interface UpdateHospitalCommand {
    id: number;
    name: string | null;
    readonly roles: string[] | null;
}

export interface UpdateHospitalDepartmentCommand {
    id: number;
    hospitalID: number;
    departmentID: number;
    readonly roles: string[] | null;
}

export interface UpdateOperationClaimCommand {
    id: number;
    name: string | null;
    readonly roles: string[] | null;
}

export interface UpdatePatientCommand {
    id: string;
    firstName: string | null;
    lastName: string | null;
    phoneNumber: string | null;
    profilePhoto: string | null;
    readonly roles: string[] | null;
}

export interface UpdateQuarterCommand {
    id: number;
    name: string | null;
    districtID: number;
    readonly roles: string[] | null;
}

export interface UpdateUserCommand {
    id: string;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    password: string | null;
    readonly roles: string[] | null;
}

export interface UpdateUserFromAuthCommand {
    id: string;
    firstName: string | null;
    lastName: string | null;
    password: string | null;
    newPassword: string | null;
}

export interface UpdateUserOperationClaimCommand {
    id: string;
    userId: string;
    operationClaimId: number;
    readonly roles: string[] | null;
}

export interface UpdatedAppointmentReportResponse {
    id: number;
    title: string | null;
    detail: string | null;
    appointmentID: string;
}

export interface UpdatedAppointmentResponse {
    id: string;
    status: AppointmentStatus;
    patientId: string;
    doctorScheduleSlotId: number;
}

export interface UpdatedCityResponse {
    id: number;
    name: string | null;
    countryID: number;
}

export interface UpdatedCountryResponse {
    id: number;
    name: string | null;
}

export interface UpdatedDepartmentResponse {
    id: number;
    name: string | null;
}

export interface UpdatedDistrictResponse {
    id: number;
    name: string | null;
    cityID: number;
}

export interface UpdatedDoctorResponse {
    id: string;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phoneNumber: string | null;
    about: string | null;
    education: string | null;
    profilePhoto: string | null;
    doctorTitleID: number;
    hospitalDepartmentID: number;
}

export interface UpdatedDoctorScheduleSlotResponse {
    id: number;
    date: Date;
    startTime: string;
    endTime: string;
    isPassive: boolean;
    doctorID: string;
}

export interface UpdatedDoctorTitleResponse {
    id: number;
    name: string | null;
    levelIndex: number;
}

export interface UpdatedFaqResponse {
    id: number;
    question: string | null;
    answer: string | null;
}

export interface UpdatedFeedbackResponse {
    id: number;
    title: string | null;
    message: string | null;
    userID: string;
}

export interface UpdatedHospitalAddressResponse {
    id: number;
    title: string | null;
    detail: string | null;
    hospitalID: number;
    quarterID: number;
}

export interface UpdatedHospitalDepartmentResponse {
    id: number;
    hospitalID: number;
    departmentID: number;
}

export interface UpdatedHospitalResponse {
    id: number;
    name: string | null;
}

export interface UpdatedPatientResponse {
    id: string;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phoneNumber: string | null;
    profilePhoto: string | null;
}

export interface UpdatedQuarterResponse {
    id: number;
    name: string | null;
    districtID: number;
}

export interface UserForLoginDto {
    email: string | null;
    password: string | null;
    authenticatorCode: string | null;
}

export interface UserForRegisterDto {
    email: string | null;
    password: string | null;
}