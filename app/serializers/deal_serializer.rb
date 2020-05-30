class DealSerializer < ActiveModel::Serializer
  attributes :id, :name, :value, :stage, :updated_at

  def updated_at
    object.updated_at.to_date
  end
end
