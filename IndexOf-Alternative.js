// Old
if (GroupHosts.indexOf(ClusterHost) > -1){
		System.debug(ClusterHost.name + " is already in this Cluster Host Group");
	}

// New
if (GroupHosts.filter(function (item) { return item == ClusterHost}).length == 1){
		System.debug(ClusterHost.name + " is already in this Cluster Host Group");
	}
