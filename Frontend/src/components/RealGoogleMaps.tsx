import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Layers, Locate, Satellite, AlertCircle } from "lucide-react";
import { useEffect, useRef, useState, useMemo } from "react";

interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  title: string;
  type: "farm" | "soil" | "crop";
  data: {
    moisture?: number;
    temperature?: number;
    cropType?: string;
    status?: string;
  };
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    google: any;
    initMap: () => void;
  }
}

const RealGoogleMaps = () => {
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);
  const [mapType, setMapType] = useState<'roadmap' | 'satellite'>('roadmap');
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationError, setLocationError] = useState<string>('');
  const [locationSuccess, setLocationSuccess] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLocationLoading, setIsLocationLoading] = useState<boolean>(false);
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markersRef = useRef<any[]>([]);
  
  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE';
  
  // Farm data with realistic coordinates - wrapped in useMemo to prevent re-renders
  const markers: MapMarker[] = useMemo(() => [
    {
      id: "1",
      lat: 28.6139,
      lng: 77.2090,
      title: "Main Farm Area - Delhi",
      type: "farm",
      data: { status: "Active" }
    },
    {
      id: "2", 
      lat: 28.6189,
      lng: 77.2140,
      title: "Soil Sensor A1",
      type: "soil",
      data: { moisture: 68, temperature: 24 }
    },
    {
      id: "3",
      lat: 28.6089,
      lng: 77.2040,
      title: "Crop Field B - Wheat",
      type: "crop",
      data: { cropType: "Wheat", status: "Growing" }
    },
    {
      id: "4",
      lat: 28.6239,
      lng: 77.2190,
      title: "Irrigation System C",
      type: "soil",
      data: { moisture: 72, temperature: 26 }
    }
  ], []);

  const getMarkerIcon = (type: string) => {
    const iconColors = {
      farm: '#22c55e', // green
      soil: '#3b82f6', // blue  
      crop: '#eab308'  // yellow
    };
    
    return {
      path: window.google?.maps.SymbolPath.CIRCLE,
      scale: 8,
      fillColor: iconColors[type as keyof typeof iconColors] || '#6b7280',
      fillOpacity: 0.8,
      strokeWeight: 2,
      strokeColor: '#ffffff'
    };
  };

  const getStatusColor = (type: string) => {
    switch (type) {
      case "farm": return "bg-green-100 text-green-700 border-green-300";
      case "soil": return "bg-blue-100 text-blue-700 border-blue-300";
      case "crop": return "bg-yellow-100 text-yellow-700 border-yellow-300";
      default: return "bg-muted text-foreground border";
    }
  };

  // Load Google Maps API
  useEffect(() => {
    if (window.google) {
      setMapLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      console.log('Google Maps API loaded successfully');
      setMapLoaded(true);
    };
    
    script.onerror = () => {
      console.error('Failed to load Google Maps API');
      setLocationError('Failed to load Google Maps. Please check your API key.');
      setIsLoading(false);
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [GOOGLE_MAPS_API_KEY]);

  // Initialize Google Map
  useEffect(() => {
    if (!mapLoaded || !mapContainerRef.current || !window.google) return;

    console.log('Initializing Google Map...');
    
    const mapOptions = {
      zoom: 13,
      center: { lat: 28.6139, lng: 77.2090 }, // Delhi center
      mapTypeId: mapType,
      mapTypeControl: true,
      streetViewControl: true,
      fullscreenControl: true,
      zoomControl: true,
      gestureHandling: 'cooperative',
      styles: mapType === 'satellite' ? [] : [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }]
        }
      ]
    };

    mapRef.current = new window.google.maps.Map(mapContainerRef.current, mapOptions);

    // Clear existing markers
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    // Add markers for each farm location
    markers.forEach(markerData => {
      const marker = new window.google.maps.Marker({
        position: { lat: markerData.lat, lng: markerData.lng },
        map: mapRef.current,
        title: markerData.title,
        icon: getMarkerIcon(markerData.type),
        animation: window.google.maps.Animation.DROP
      });

      // Create info window content
      const infoContent = `
        <div style="padding: 10px; min-width: 200px;">
          <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: bold;">
            ${markerData.title}
          </h3>
          <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px; text-transform: capitalize;">
            ${markerData.type} Station
          </p>
          ${markerData.data.status ? `
            <div style="margin: 4px 0; padding: 4px 8px; background: #dcfce7; color: #166534; border-radius: 4px; font-size: 12px;">
              Status: ${markerData.data.status}
            </div>
          ` : ''}
          ${markerData.data.moisture ? `
            <div style="margin: 4px 0; padding: 4px 8px; background: #dbeafe; color: #1e40af; border-radius: 4px; font-size: 12px;">
              💧 Soil Moisture: ${markerData.data.moisture}%
            </div>
          ` : ''}
          ${markerData.data.temperature ? `
            <div style="margin: 4px 0; padding: 4px 8px; background: #fed7aa; color: #c2410c; border-radius: 4px; font-size: 12px;">
              🌡️ Temperature: ${markerData.data.temperature}°C
            </div>
          ` : ''}
          ${markerData.data.cropType ? `
            <div style="margin: 4px 0; padding: 4px 8px; background: #fef3c7; color: #a16207; border-radius: 4px; font-size: 12px;">
              🌾 Crop: ${markerData.data.cropType}
            </div>
          ` : ''}
        </div>
      `;

      const infoWindow = new window.google.maps.InfoWindow({
        content: infoContent
      });

      marker.addListener('click', () => {
        // Close other info windows
        markersRef.current.forEach(m => {
          if (m.infoWindow) {
            m.infoWindow.close();
          }
        });
        
        infoWindow.open(mapRef.current, marker);
        setSelectedMarker(markerData);
      });

      // Store info window reference
      marker.infoWindow = infoWindow;
      markersRef.current.push(marker);
    });

    // Add user location if available
    if (userLocation) {
      const userMarker = new window.google.maps.Marker({
        position: userLocation,
        map: mapRef.current,
        title: "Your Current Location",
        icon: {
          // Home icon SVG path
          path: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
          fillColor: '#ef4444',
          fillOpacity: 1,
          strokeWeight: 2,
          strokeColor: '#ffffff',
          scale: 1.5,
          anchor: { x: 12, y: 24 }
        },
        animation: window.google.maps.Animation.DROP
      });

      // Create info window for user location
      const userInfoContent = `
        <div style="padding: 10px; min-width: 180px; text-align: center;">
          <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: bold;">
            🏠 Your Location
          </h3>
          <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">
            Current GPS Position
          </p>
          <div style="margin: 4px 0; padding: 4px 8px; background: #fef2f2; color: #dc2626; border-radius: 4px; font-size: 12px;">
            📍 Lat: ${userLocation.lat.toFixed(6)}
          </div>
          <div style="margin: 4px 0; padding: 4px 8px; background: #fef2f2; color: #dc2626; border-radius: 4px; font-size: 12px;">
            📍 Lng: ${userLocation.lng.toFixed(6)}
          </div>
        </div>
      `;

      const userInfoWindow = new window.google.maps.InfoWindow({
        content: userInfoContent
      });

      userMarker.addListener('click', () => {
        // Close other info windows
        markersRef.current.forEach(m => {
          if (m.infoWindow) {
            m.infoWindow.close();
          }
        });
        
        userInfoWindow.open(mapRef.current, userMarker);
      });

      // Store info window reference
      userMarker.infoWindow = userInfoWindow;
      markersRef.current.push(userMarker);
    }

    setIsLoading(false);
    console.log('Google Map initialized successfully');
  }, [mapLoaded, mapType, userLocation, markers]);

  // Get user's current location
  const getCurrentLocation = () => {
    setLocationError('');
    setLocationSuccess('');
    setIsLocationLoading(true);
    
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by this browser.');
      setIsLocationLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setUserLocation(location);
        
        // Center map on user location
        if (mapRef.current) {
          mapRef.current.setCenter(location);
          mapRef.current.setZoom(16); // Zoom closer for better visibility
        }
        
        setIsLocationLoading(false);
        setLocationSuccess('🏠 Your location has been found and marked on the map!');
        console.log('User location found:', location);
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          setLocationSuccess('');
        }, 3000);
      },
      (error) => {
        let errorMessage = 'Unable to retrieve your location. ';
        switch(error.code) {
          case error.PERMISSION_DENIED:
            errorMessage += 'Location access denied. Please enable location permissions.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage += 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            errorMessage += 'Location request timed out.';
            break;
          default:
            errorMessage += 'Please enable location services and try again.';
            break;
        }
        setLocationError(errorMessage);
        setIsLocationLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 300000 // Cache location for 5 minutes
      }
    );
  };

  // Toggle map type
  const toggleMapType = () => {
    const newMapType = mapType === 'roadmap' ? 'satellite' : 'roadmap';
    setMapType(newMapType);
    
    if (mapRef.current) {
      mapRef.current.setMapTypeId(newMapType);
    }
  };

  return (
    <section id="maps" className="py-24 bg-gradient-to-br from-emerald-50/50 via-background to-green-50/50 dark:from-emerald-950/20 dark:via-background dark:to-green-950/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-emerald-400/30 bg-emerald-50/50 dark:bg-emerald-950/30">
            <MapPin className="w-4 h-4 mr-2 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Farm Location</span>
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            <span className="gradient-text bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 dark:from-emerald-400 dark:via-green-400 dark:to-teal-400">
              Interactive Farm Map
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore your farm locations with real-time Google Maps integration. View satellite imagery, 
            street maps, and get detailed insights about soil conditions and crop status.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card shadow-card border-0 animate-slide-in">
              <CardHeader>
                <CardTitle className="flex items-center justify-between flex-wrap gap-2">
                  <span className="flex items-center gap-2">
                    <Navigation className="h-5 w-5 text-primary" />
                    Google Maps Farm Monitor
                  </span>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={toggleMapType}
                      className="flex items-center gap-2 transition-all duration-200"
                    >
                      {mapType === 'roadmap' ? <Satellite className="w-4 h-4" /> : <Layers className="w-4 h-4" />}
                      {mapType === 'roadmap' ? 'Satellite' : 'Map'} View
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={getCurrentLocation}
                      className="flex items-center gap-2 transition-all duration-200"
                      disabled={isLoading || isLocationLoading}
                    >
                      {isLocationLoading ? (
                        <>
                          <div className="w-4 h-4 animate-spin rounded-full border-2 border-gray-400 border-t-transparent"></div>
                          Finding...
                        </>
                      ) : userLocation ? (
                        <>
                          🏠
                          Found Me
                        </>
                      ) : (
                        <>
                          <Locate className="w-4 h-4" />
                          Find Me
                        </>
                      )}
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading && (
                  <div className="flex items-center justify-center h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg border-2 border-gray-200">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mx-auto mb-4"></div>
                      <p className="text-muted-foreground font-medium">Loading Google Maps...</p>
                      <p className="text-muted-foreground/70 text-sm">Connecting to satellite imagery</p>
                    </div>
                  </div>
                )}
                
                {locationError && (
                  <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                    <span className="text-yellow-800 text-sm">{locationError}</span>
                  </div>
                )}
                
                {locationSuccess && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                    <div className="w-4 h-4 text-green-600 flex-shrink-0">✅</div>
                    <span className="text-green-800 text-sm">{locationSuccess}</span>
                  </div>
                )}
                
                {GOOGLE_MAPS_API_KEY === 'YOUR_API_KEY_HERE' && (
                  <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                      <span className="text-red-800 text-sm font-medium">Google Maps API Key Required</span>
                    </div>
                    <p className="text-red-700 text-sm">
                      Please add your Google Maps API key to the .env file as VITE_GOOGLE_MAPS_API_KEY
                    </p>
                  </div>
                )}
                
                <div 
                  ref={mapContainerRef} 
                  className="w-full h-96 rounded-lg border-2 border-border bg-muted"
                  style={{ 
                    minHeight: '400px',
                    display: isLoading ? 'none' : 'block'
                  }}
                />
              </CardContent>
            </Card>
          </div>

          {/* Info Panel */}
          <div className="space-y-6">
            {/* Map Legend */}
            <Card className="bg-gradient-card shadow-card border-0 animate-slide-in">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Layers className="w-5 h-5 text-primary" />
                  Map Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-2 hover:bg-accent rounded-lg transition-colors">
                  <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                  <div>
                    <span className="text-sm font-medium">Farm Buildings</span>
                    <p className="text-xs text-muted-foreground">Main facility locations</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-accent rounded-lg transition-colors">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
                  <div>
                    <span className="text-sm font-medium">Smart Sensors</span>
                    <p className="text-xs text-muted-foreground">IoT monitoring devices</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-accent rounded-lg transition-colors">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full border-2 border-white shadow-sm"></div>
                  <div>
                    <span className="text-sm font-medium">Crop Fields</span>
                    <p className="text-xs text-muted-foreground">Active growing areas</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 hover:bg-accent rounded-lg transition-colors">
                  <div className="w-4 h-4 flex items-center justify-center">
                    🏠
                  </div>
                  <div>
                    <span className="text-sm font-medium">Your Location</span>
                    <p className="text-xs text-muted-foreground">Current GPS position</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Selected Marker Info */}
            {selectedMarker ? (
              <Card className="bg-gradient-card shadow-card border-0 animate-bounce-in">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div 
                      className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                      style={{
                        backgroundColor: selectedMarker.type === 'farm' ? '#22c55e' : 
                                        selectedMarker.type === 'soil' ? '#3b82f6' : '#eab308'
                      }}
                    ></div>
                    {selectedMarker.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Badge className={getStatusColor(selectedMarker.type)}>
                    {selectedMarker.type.charAt(0).toUpperCase() + selectedMarker.type.slice(1)} Station
                  </Badge>
                  
                  <div className="space-y-3">
                    {selectedMarker.data.moisture && (
                      <div className="flex justify-between items-center p-2 bg-blue-50 rounded-lg">
                        <span className="text-sm font-medium flex items-center gap-2">
                          💧 Soil Moisture
                        </span>
                        <span className="text-sm font-bold text-blue-600">
                          {selectedMarker.data.moisture}%
                        </span>
                      </div>
                    )}
                    
                    {selectedMarker.data.temperature && (
                      <div className="flex justify-between items-center p-2 bg-orange-50 rounded-lg">
                        <span className="text-sm font-medium flex items-center gap-2">
                          🌡️ Temperature
                        </span>
                        <span className="text-sm font-bold text-orange-600">
                          {selectedMarker.data.temperature}°C
                        </span>
                      </div>
                    )}
                    
                    {selectedMarker.data.cropType && (
                      <div className="flex justify-between items-center p-2 bg-green-50 rounded-lg">
                        <span className="text-sm font-medium flex items-center gap-2">
                          🌾 Crop Type
                        </span>
                        <span className="text-sm font-bold text-green-600">
                          {selectedMarker.data.cropType}
                        </span>
                      </div>
                    )}
                    
                    {selectedMarker.data.status && (
                      <div className="flex justify-between items-center p-2 bg-muted rounded-lg">
                        <span className="text-sm font-medium flex items-center gap-2">
                          ⚡ Status
                        </span>
                        <Badge variant="outline" className="text-xs bg-green-100 text-green-700">
                          {selectedMarker.data.status}
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-xs text-muted-foreground">
                      Last updated: {new Date().toLocaleTimeString()}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-gradient-card shadow-card border-0">
                <CardContent className="p-6 text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-sm font-medium">Select a Location</p>
                  <p className="text-xs mt-2">
                    Click on any marker to view detailed information about that location
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Quick Stats */}
            <Card className="bg-gradient-card shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Active Sensors</span>
                  <span className="text-lg font-bold text-blue-600">{markers.filter(m => m.type === 'soil').length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Crop Fields</span>
                  <span className="text-lg font-bold text-yellow-600">{markers.filter(m => m.type === 'crop').length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Farm Buildings</span>
                  <span className="text-lg font-bold text-green-600">{markers.filter(m => m.type === 'farm').length}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealGoogleMaps;