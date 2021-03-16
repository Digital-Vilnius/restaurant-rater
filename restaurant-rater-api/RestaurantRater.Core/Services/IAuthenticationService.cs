﻿using System.Threading.Tasks;
using RestaurantRater.Contracts;
using RestaurantRater.Contracts.Authentication;
using RestaurantRater.Dtos.Authentication;

namespace RestaurantRater.Core.Services
{
    public interface IAuthenticationService
    {
        Task<ResultResponse<LoggedUserDto>> LoginAsync(LoginRequest request);
        Task<BaseResponse> RegisterAsync(RegisterRequest request);
    }
}