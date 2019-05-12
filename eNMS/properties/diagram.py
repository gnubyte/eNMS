from typing import Dict, List

from eNMS import controller

object_properties: List[str] = ["model", "vendor", "subtype", "location"]

device_properties: List[str] = (
    object_properties
    + ["operating_system", "os_version", "port"]
    + list(p for p, v in controller.custom_properties.items() if v["add_to_dashboard"])
)

user_properties: List[str] = ["name"]

service_properties: List[str] = [
    "vendor",
    "operating_system",
    "creator",
    "send_notification",
    "send_notification_method",
    "multiprocessing",
    "max_processes",
    "number_of_retries",
    "time_between_retries",
]

workflow_properties: List[str] = service_properties

task_properties: List[str] = [
    "status",
    "periodic",
    "frequency",
    "frequency_unit",
    "crontab_expression",
    "job_name",
]

type_to_diagram_properties: Dict[str, List[str]] = {
    "Device": device_properties,
    "Link": object_properties,
    "User": user_properties,
    "Service": service_properties,
    "Workflow": workflow_properties,
    "Task": task_properties,
}
