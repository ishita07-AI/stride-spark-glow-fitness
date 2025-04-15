
import { motion } from "framer-motion";
import { Smartphone, Watch, Tablet, CheckCircle, XCircle, RefreshCw } from "lucide-react";

interface Device {
  id: string;
  name: string;
  type: "phone" | "watch" | "tablet";
  connected: boolean;
  lastSync?: string;
}

interface DeviceSyncProps {
  devices: Device[];
  onSync?: (deviceId: string) => void;
}

export const DeviceSync = ({ devices, onSync }: DeviceSyncProps) => {
  const getDeviceIcon = (type: Device["type"]) => {
    switch (type) {
      case "phone":
        return <Smartphone size={20} />;
      case "watch":
        return <Watch size={20} />;
      case "tablet":
        return <Tablet size={20} />;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 border shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Connected Devices</h3>
      
      <div className="space-y-3">
        {devices.map((device) => (
          <motion.div 
            key={device.id}
            className="flex items-center justify-between p-3 rounded-xl border bg-gray-50"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ backgroundColor: "#F9FAFB" }}
          >
            <div className="flex items-center">
              <motion.div 
                className={`h-10 w-10 rounded-full flex items-center justify-center mr-3 ${
                  device.connected 
                    ? "bg-steppy-primary/10 text-steppy-primary" 
                    : "bg-gray-200 text-gray-500"
                }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {getDeviceIcon(device.type)}
              </motion.div>
              
              <div>
                <div className="flex items-center">
                  <span className="font-medium">{device.name}</span>
                  {device.connected ? (
                    <CheckCircle size={14} className="text-green-500 ml-2" />
                  ) : (
                    <XCircle size={14} className="text-red-500 ml-2" />
                  )}
                </div>
                
                {device.lastSync && (
                  <p className="text-xs text-gray-500">Last synced: {device.lastSync}</p>
                )}
              </div>
            </div>
            
            {device.connected && (
              <motion.button
                className="h-8 w-8 rounded-full bg-steppy-primary/10 text-steppy-primary flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 90 }}
                onClick={() => onSync?.(device.id)}
              >
                <RefreshCw size={16} />
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>
      
      <motion.button
        className="mt-4 w-full py-2 rounded-xl bg-gray-100 text-sm font-medium text-gray-700 flex items-center justify-center"
        whileHover={{ backgroundColor: "#F3F4F6" }}
        whileTap={{ scale: 0.98 }}
      >
        <span>Add New Device</span>
      </motion.button>
    </div>
  );
};
