package com.takvimim.takvimimbackend.common.response;

public record MessageResponse(
        String message,
        MessageType messageType
) {
}

