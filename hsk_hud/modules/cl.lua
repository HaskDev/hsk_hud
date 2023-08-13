local hunger = 100
local thirst = 100 

RegisterNetEvent("hud:client:UpdateNeeds")
AddEventHandler("hud:client:UpdateNeeds", function(newHunger, newThirst)
    hunger = newHunger
    thirst = newThirst
end)

CreateThread(function()
    while true do
        local msec = 1000;
        local ped = PlayerPedId()

        SendNUIMessage({
            action = "u-hud";
            vida = GetEntityHealth(ped) - 100;
            hunger = hunger;
            thirst = thirst;
            escudo = GetPedArmour(ped);
            stamina = 100-GetPlayerSprintStaminaRemaining(PlayerId());
            oxigeno = GetPlayerUnderwaterTimeRemaining(PlayerId()) * 10;
            enVeh = IsPedInAnyVehicle(PlayerPedId());
        })
        DisplayRadar(IsPedInAnyVehicle(PlayerPedId()))
        Wait(msec)
    end
end)