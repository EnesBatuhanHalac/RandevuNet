using Application.Services.Repositories;
using Domain.Entities;
using NArchitecture.Core.Persistence.Repositories;
using Persistence.Contexts;

namespace Persistence.Repositories;

public class AppointmentRepository : EfRepositoryBase<Appointment, Guid, BaseDbContext>, IAppointmentRepository
{
    public AppointmentRepository(BaseDbContext context) : base(context)
    {
    }
}