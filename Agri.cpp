
#include <WiFi.h>
#include <FirebaseESP32.h>

#define FIREBASE_HOST "https://agriculture-c043a-default-rtdb.asia-southeast1.firebasedatabase.app/"
#define FIREBASE_AUTH "AIzaSyBySYnKPF7GF3dMRBOS6d7SI4fG_RKQclc"

#define WIFI_SSID "your-wifi-ssid"
#define WIFI_PASSWORD "your-wifi-password"

// Initialize FirebaseESP32 data object
FirebaseData firebaseData;

void setup()
{
    Serial.begin(115200);

    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    Serial.print("Connecting to Wi-Fi");

    while (WiFi.status() != WL_CONNECTED)
    {
        Serial.print(".");
        delay(500);
    }

    Serial.println();
    Serial.println("Connected to Wi-Fi!");

    // Initialize Firebase
    Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

void loop()
{
    // Update data in Firebase
    updateFirebaseData("sensor", 30);

    // wait 10 seconds
    delay(10000);
}

void updateFirebaseData(String path, int value)
{
    // Update integer value in Firebase
    if (Firebase.setInt(firebaseData, path.c_str(), value))
    {
        Serial.println("Data updated in Firebase successfully");
    }
    else
    {
        Serial.println("Error: " + firebaseData.errorReason());
    }
}