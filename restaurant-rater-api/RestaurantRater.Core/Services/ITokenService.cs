﻿namespace RestaurantRater.Core.Services
{
    public interface ITokenService
    {
        string GenerateRefreshToken();
        string GenerateToken(string email);
    }
}