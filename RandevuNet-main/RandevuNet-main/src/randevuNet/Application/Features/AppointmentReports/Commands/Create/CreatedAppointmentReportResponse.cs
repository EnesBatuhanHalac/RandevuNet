using NArchitecture.Core.Application.Responses;

namespace Application.Features.AppointmentReports.Commands.Create;

public class CreatedAppointmentReportResponse : IResponse
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Detail { get; set; }
    public Guid AppointmentID { get; set; }
}