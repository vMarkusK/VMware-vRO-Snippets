switch(vm.vmStatus.value) {
				    case "3":
				        data_vm.put("vmStatusFull", "Powered_Off");
				        break;
				    case "4":
				        data_vm.put("vmStatusFull", "Powered_On");
				        break;
				    default:
				        data_vm.put("vmStatusFull", "Other");
				}
