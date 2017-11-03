var data_vdcs = new Array();
	for each(vdc in vdcs){
		var date = new Date().toISOString().slice(0, 19).replace('T', ' ');
		var data_vdc = new Properties(); 
		data_vdc.put("OrgUId", host.internalId + "_" + org.id); 
		data_vdc.put("VdcUId", host.internalId + "_" + org.id + "_" + vdc.id);
		data_vdc.put("VdcId", vdc.id);
		data_vdc.put("VdcName", vdc.name);
		data_vdc.put("allocationModel", vdc.allocationModel);
		data_vdc.put("IsEnabled", vdc.isEnabled);
		data_vdc.put("CpuUsageMhz", vdc.computeCapacity.cpu.used);
		data_vdc.put("RamUsageMb", vdc.computeCapacity.memory.used);
		data_vdc.put("date", date);
		data_vdcs.push(data_vdc);
		allvdcs.push(vdc);
	}
