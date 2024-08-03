using NArchitecture.Core.Application.Responses;

namespace Application.Features.Feedbacks.Queries.GetById;

public class GetByIdFeedbackResponse : IResponse
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Message { get; set; }
    public Guid UserID { get; set; }
}